# [1.2.0](https://github.com/DSP3-apps/ncea-frontend/compare/v1.1.0...v1.2.0) (2024-12-13)


### Bug Fixes

* **filters:** Fix query paramters removed from url upon filter change ([d339c09](https://github.com/DSP3-apps/ncea-frontend/commit/d339c09b5071fb65e9ce0f46ea8ede3a4cec7b68)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **filters:** Fix styling issue in classifier search ([38f2a67](https://github.com/DSP3-apps/ncea-frontend/commit/38f2a67240b75de71690af28ddf3b8b6e864d18b))
* **filters:** Prevent invalid state in url ([75e3e0e](https://github.com/DSP3-apps/ncea-frontend/commit/75e3e0e850ac0c79cb0dd13020fce0558d5aa9ed)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **frontend:** Fix incorrect count in classifier search ([d1f9589](https://github.com/DSP3-apps/ncea-frontend/commit/d1f95897de43e07c70c52f54096ebed39f25fa56)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **map:** Fix map view not appearing in quick search ([079e62a](https://github.com/DSP3-apps/ncea-frontend/commit/079e62afaa0af3608c3f36ab9c877acdbba73997))
* **tests:** Fix tests after merging DSP filters ([fede729](https://github.com/DSP3-apps/ncea-frontend/commit/fede7295940b841c7cff4992af4e26ec5c0fdae7)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)


### Features

* **filter scope:** Change data scope filter to radio button ([a02dd21](https://github.com/DSP3-apps/ncea-frontend/commit/a02dd21925f311d21f2f7560c1f596c0e29df59b)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **filters:** Add styling to new filters ([e39c320](https://github.com/DSP3-apps/ncea-frontend/commit/e39c320fa9008c80c83702f52854ed608863e158)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **filters:** Create markup for new DSP filters ([8518c3f](https://github.com/DSP3-apps/ncea-frontend/commit/8518c3f1bed983d2b48da2e84ff303dafbf74798)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **filters:** Implement filter functionality ([ddd0169](https://github.com/DSP3-apps/ncea-frontend/commit/ddd0169304c4b6c354ec9d80fe6647a9583ac9d5)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)
* **filters:** Replace magic strings with constants ([89baf17](https://github.com/DSP3-apps/ncea-frontend/commit/89baf17e3c382895b7d65758085cd51675b15e14)), closes [#NCEA-123](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-123)

# [1.1.0](https://github.com/DSP3-apps/ncea-frontend/compare/v1.0.2...v1.1.0) (2024-12-12)


### Bug Fixes

* **mock data:** mock out filter network request ([e49f62d](https://github.com/DSP3-apps/ncea-frontend/commit/e49f62d9f7bae38f8b3b23e863c198c423ad59a7)), closes [#NCEA-42](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-42)
* **mocked data:** mock out quick search network request ([e79bf47](https://github.com/DSP3-apps/ncea-frontend/commit/e79bf474014b2256cadf0e88e0fcd379ad4ddede)), closes [#NCEA-42](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-42)


### Features

* **mock data:** mock out classifier search network requests ([67c29f3](https://github.com/DSP3-apps/ncea-frontend/commit/67c29f387cc34853d15f75aae1e5b5e0fe11b313)), closes [#NCEA-42](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-42)

## [1.0.2](https://github.com/DSP3-apps/ncea-frontend/compare/v1.0.1...v1.0.2) (2024-11-28)


### Bug Fixes

* **project:** Revert absolute paths ([147641f](https://github.com/DSP3-apps/ncea-frontend/commit/147641ff84329c63cda904d75330906f921d8dca))
* **styles:** Update path to missing images ([6423387](https://github.com/DSP3-apps/ncea-frontend/commit/6423387c93c892cda865e5e60a668f7acd88f48a))

## [1.0.1](https://github.com/DSP3-apps/ncea-frontend/compare/v1.0.0...v1.0.1) (2024-11-27)


### Bug Fixes

* **project:** Update URLs to include an app base path ([9715855](https://github.com/DSP3-apps/ncea-frontend/commit/97158557bb9364e889be3e54dbcb2b1f2beb02c9)), closes [#NCEA-37](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-37)
* **tests:** Update all broken tests due to base path change ([9be6f23](https://github.com/DSP3-apps/ncea-frontend/commit/9be6f23ad40d5117384dff1e553431cc565d315f))

# 1.0.0 (2024-11-14)


### Bug Fixes

* **classifiers:** Update how auth key is fetched ([e7c96e0](https://github.com/DSP3-apps/ncea-frontend/commit/e7c96e0055443fc5f42041721b81e30699d6d7de))
* **elastic search:** Remove TLS config ([edbaf0f](https://github.com/DSP3-apps/ncea-frontend/commit/edbaf0feba3d6d10a233f0e8da96fafe9b567cdc))
* **project:** Add a docker compose file to make running app locally easier ([75d9b00](https://github.com/DSP3-apps/ncea-frontend/commit/75d9b005c6121e8124395d8502e62652232790fa)), closes [#NCEA-22](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-22)
* **project:** Add asdf version manager config ([ed27bbe](https://github.com/DSP3-apps/ncea-frontend/commit/ed27bbee957628fc84febf42452ed8631d304bbe)), closes [#NCEA-22](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-22)
* **project:** Add DSP linting ([672b0e2](https://github.com/DSP3-apps/ncea-frontend/commit/672b0e233c95c4e6c1ab59ab925faa48fb65dde2))
* **project:** Fix tests that break due to absolute imports ([9638917](https://github.com/DSP3-apps/ncea-frontend/commit/9638917e2b74bd2783ecae5ed3093bb25decf4f9))
* **project:** Integrate VSCode with linting/formatting ([9f5717a](https://github.com/DSP3-apps/ncea-frontend/commit/9f5717afde7e97d6ec43ea4944099424e95914fb))
* **project:** Remove formatting from husky git hook ([b3431ec](https://github.com/DSP3-apps/ncea-frontend/commit/b3431ec0542ed19ea70ab18c6502a68bd4fee02a)), closes [#NCEA-22](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-22)
* **project:** Remove linting step as it was complaining about SASS ([d63a1b7](https://github.com/DSP3-apps/ncea-frontend/commit/d63a1b71abd57772a4d7da34c8b8357372ecb7a3))
* **project:** Switch husky to pre-push instead of pre-commit ([173f471](https://github.com/DSP3-apps/ncea-frontend/commit/173f471b373cc144a0a365c668bd746a296885c3)), closes [#NCEA-22](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-22)
* **project:** Switch to absolute imports where it makes sense ([31c3a93](https://github.com/DSP3-apps/ncea-frontend/commit/31c3a93374eea9ad99ef426a55e79ad856a8bdf4)), closes [#NCEA-22](https://github.com/DSP3-apps/ncea-frontend/issues/NCEA-22)
* **project:** Update and refactor npm scripts ([5ac0ded](https://github.com/DSP3-apps/ncea-frontend/commit/5ac0ded712c513e48771093f03bf21ae043248ce))


### Features

* **devops:** Add automated release management ([17c0f71](https://github.com/DSP3-apps/ncea-frontend/commit/17c0f710748ce308832e3c596f897880a7b33257))
* **devops:** Add build github workflow ([c3147a5](https://github.com/DSP3-apps/ncea-frontend/commit/c3147a55518f07b534f4191638042f8256640284))
* Results per page component at results page ([#21](https://github.com/DSP3-apps/ncea-frontend/issues/21)) ([4bd4787](https://github.com/DSP3-apps/ncea-frontend/commit/4bd478762f2db0e33b0e8ea19d77b12cee64f95b))
