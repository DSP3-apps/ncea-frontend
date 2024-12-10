import { Classifiers } from '@/interfaces/classifierSearch.interface';

import { CLASSIFIER_LEVEL_1 } from './mocks/classifier-themes-level-1';
import { CLASSIFIER_LEVEL_2 } from './mocks/classifier-themes-level-2';
import { CLASSIFIER_LEVEL_3 } from './mocks/classifier-themes-level-3';
// import { getSecret } from '@/utils/keyvault';

// const transformClassifierDetails = (classifiers: Classify[]): Classify[] => {
//   return classifiers?.map((classifier) => ({
//     ...classifier,
//     text: classifier.definition,
//     value: classifier.themeName ?? classifier.name,
//   }));
// };

// const transformClassifierLevel3Details = (Level2Classifiers: Classify[]): Classifiers[] => {
//   return Level2Classifiers.map((classifier2: Classify) => {
//     const classifiers3 = classifier2.classifiers ? transformClassifierDetails(classifier2.classifiers) : [];
//     return {
//       ...classifier2,
//       sectionTitle: classifier2.name,
//       sectionIntroduction: '',
//       classifiers: classifiers3,
//       selectAll: classifiers3?.map((classify) => classify.code).join(','),
//       text: '',
//       value: classifier2.name,
//     };
//   });
// };

// const invokeClassifierApi = async (level: string, parents: string = ''): Promise<AxiosResponse> => {
//   try {
//     // const classifierApiAuthKey = await getSecret(
//     //   environmentConfig.classifierApiKey ?? 'nceaClassifierMicroServiceApiKey',
//     // );
//     let url = `${environmentConfig.classifierApiUrl}api/classifiers?level=${level}`;

//     if (parents) {
//       url = url + `&Parents=${parents}`;
//     }
//     const headers = {
//       headers: {
//         'X-API-Key': environmentConfig.classifierApiKey,
//       },
//     };
//     const response: AxiosResponse = await axios.get(url, headers);
//     return response;
//   } catch (error: unknown) {
//     throw new Error('Error invoking classifier list api.');
//   }
// };

export const getClassifierThemes = async (
  level: string,
  /* eslint-disable  @typescript-eslint/no-unused-vars */
  parents: string = '',
): Promise<Classifiers[]> => {
  try {
    // const response: AxiosResponse = await invokeClassifierApi(level, parents);
    // const classifierResponse: Classifiers[] = [];
    // response.data.forEach((classifier: Classifiers) => {
    //   if (classifier.level === 3) {
    //     classifierResponse.push({
    //       sectionTitle: classifier.sectionTitle,
    //       sectionIntroduction: classifier.sectionIntroduction,
    //       classifiers: [],
    //       selectAll: '',
    //     });
    //     const lvl3: Classifiers[] = transformClassifierLevel3Details(classifier.classifiers);
    //     classifierResponse.push(...lvl3);
    //   } else {
    //     const classifiers = transformClassifierDetails(classifier.classifiers);
    //     classifierResponse.push({
    //       sectionTitle: classifier.sectionTitle,
    //       sectionIntroduction: classifier.sectionIntroduction,
    //       classifiers,
    //       selectAll: classifiers.map((classify) => classify.code).join(','),
    //     });
    //   }
    // });
    let classifierResponse;
    if (level === '1') {
      classifierResponse = CLASSIFIER_LEVEL_1;
    } else if (level === '2') {
      classifierResponse = CLASSIFIER_LEVEL_2;
    } else {
      classifierResponse = CLASSIFIER_LEVEL_3;
    }

    return classifierResponse;
  } catch (error: unknown) {
    return [];
  }
};
