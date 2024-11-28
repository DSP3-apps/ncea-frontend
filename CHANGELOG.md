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
