## [1.8.5](https://github.com/ryparker/schematized/compare/v1.8.4...v1.8.5) (2020-08-13)


### Bug Fixes

* **max/min limits:** min/max were inaccurate if unset or 0 ([caa0fe6](https://github.com/ryparker/schematized/commit/caa0fe6d84f3e19cb248b8cc39fa612ed9ab4975))

## [1.8.4](https://github.com/ryparker/schematized/compare/v1.8.3...v1.8.4) (2020-08-13)


### Bug Fixes

* **objects, patternproperties:** objects with only patternProps will no longer have undefined props ([71d0e5d](https://github.com/ryparker/schematized/commit/71d0e5d8f099dcdfeed00ea44eff592f52ac6b82))

## [1.8.3](https://github.com/ryparker/schematized/compare/v1.8.2...v1.8.3) (2020-08-12)


### Bug Fixes

* **strategies/*:** null strategy values will be ignored ([dd3d6d8](https://github.com/ryparker/schematized/commit/dd3d6d8a42fcd852aab30a4f6be921fc4173d578))

## [1.8.2](https://github.com/ryparker/schematized/compare/v1.8.1...v1.8.2) (2020-08-12)


### Bug Fixes

* **array and string strategies:** fix for empty arrays being schematized as "items:undefined" ([4233772](https://github.com/ryparker/schematized/commit/423377238004ca764bc8b83d17e500948561c17c))

## [1.8.1](https://github.com/ryparker/schematized/compare/v1.8.0...v1.8.1) (2020-08-12)


### Performance Improvements

* **removed unnecessary toschema() declarations:** also bumped deps ([df9e42c](https://github.com/ryparker/schematized/commit/df9e42cad39bc95c3cbe175a34a6e35245cf351e))

# [1.8.0](https://github.com/ryparker/schematized/compare/v1.7.2...v1.8.0) (2020-08-07)


### Features

* **object strategy:** added support for disabling min/maxProperties on the object strategy ([0b07b2c](https://github.com/ryparker/schematized/commit/0b07b2c2b5bca90a35662822bead48dc954e1ad0))

## [1.7.2](https://github.com/ryparker/schematized/compare/v1.7.1...v1.7.2) (2020-08-06)


### Bug Fixes

* **object max/minproperties:** if max/minProperties is null then ignore ([702b088](https://github.com/ryparker/schematized/commit/702b0889d4fbff1109d58cb8c092ea7b8a76d818))