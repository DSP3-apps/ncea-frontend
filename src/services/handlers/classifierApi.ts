import { environmentConfig } from '../../config/environmentConfig';
import { Classifiers, Classify } from '../../interfaces/classifierSearch.interface';
import { monetaryCategory, naturalCapitalEvaluation, nonMonetaryCategory } from '../../utils/constants';

const transformClassifierDetails = (classifiers: Classify[]): Classify[] => {
  return classifiers?.map((classifier) => ({
    ...classifier,
    text: classifier.definition,
    value: classifier.themeName ?? classifier.name,
  }));
};

const transformClassifierLevel3Details = (Level2Classifiers: Classify[]): Classifiers[] => {
  return Level2Classifiers.map((classifier2: Classify) => {
    const classifiers3 = classifier2.classifiers ? transformClassifierDetails(classifier2.classifiers) : [];
    return {
      ...classifier2,
      sectionTitle: classifier2.name,
      sectionIntroduction: '',
      classifiers: classifiers3,
      selectAll: classifiers3?.map((classify) => classify.code).join(','),
      text: '',
      value: classifier2.name,
    };
  });
};

const invokeClassifierApi = async (level: string, parents: string = '') => {
  let url = `${environmentConfig.classifierApiUrl}api/classifiers?level=${level}`;

  if (parents) {
    url = url + `&Parents=${parents}`;
  }
  const response = await fetch(url, {
    method: 'GET',
    headers: { 'X-API-Key': environmentConfig.classifierApiKey } as HeadersInit,
  });
  const data = await response.json();
  return data;
};

export const getClassifierThemes = async (level: string, parents: string = ''): Promise<Classifiers[]> => {
  try {
    const response = await invokeClassifierApi(level, parents);
    const parentIdsArr = parents.split(',');
    const classifierResponse: Classifiers[] = [];
    response.forEach((classifier: Classifiers) => {
      if (classifier.level === 3) {
        classifierResponse.push({
          sectionTitle: classifier.sectionTitle,
          sectionIntroduction: classifier.sectionIntroduction,
          classifiers: [],
          selectAll: '',
        });
        const lvl3: Classifiers[] = transformClassifierLevel3Details(classifier.classifiers);
        classifierResponse.push(...lvl3);
      } else {
        const classifiers = transformClassifierDetails(classifier.classifiers);
        classifierResponse.push({
          sectionTitle: classifier.sectionTitle,
          sectionIntroduction: classifier.sectionIntroduction,
          classifiers,
          selectAll: classifiers.map((classify) => classify.code).join(','),
        });
      }
    });
    if (Number(level) === 3 && parentIdsArr.includes('lvl2_009') && parentIdsArr.includes('lvl2_010')) {
      classifierResponse.push(naturalCapitalEvaluation);
      classifierResponse.push(monetaryCategory);
      classifierResponse.push(nonMonetaryCategory);
    }
    if (Number(level) === 3 && parentIdsArr.includes('lvl2_009') && !parentIdsArr.includes('lvl2_010')) {
      classifierResponse.push(naturalCapitalEvaluation);
      classifierResponse.push(monetaryCategory);
    }
    if (Number(level) === 3 && !parentIdsArr.includes('lvl2_009') && parentIdsArr.includes('lvl2_010')) {
      classifierResponse.push(naturalCapitalEvaluation);
      classifierResponse.push(nonMonetaryCategory);
    }
    return classifierResponse;
  } catch (error: unknown) {
    return [];
  }
};
