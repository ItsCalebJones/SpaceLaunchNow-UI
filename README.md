# Space Launch Now - UI

## Requirements
* Node v16.15.0

### Docker 

## Run Test

`docker build -t spacelaunchnow-ui:tag --target builder .`

```
docker run \
    -it \
    --rm \
    -p 1337:80 \
    spacelaunchnow-ui:tag
```

## Build for Local Dev

`docker build --target base -t spacelaunchnow-ui-dev:tag .`

`docker run -it --rm -p 3000:3000 -v /$(pwd):/app spacelaunchnow-ui-dev:tag npm run start`

## Build for Prod

`docker build -t spacelaunchnow-ui:tag .`

```
docker run \
    -it \
    --rm \
    -p 1337:80 \
    spacelaunchnow-ui:tag
```

### commitlint

This repo uses [commitlint](https://github.com/conventional-changelog/commitlint) to enforce a particular commit message style. This ensures consistency in commit messages, makes it easier to update release notes, and helps people better understand the scope of the changes (e.g. what features of the product, whether they are test-only or affect production code). This is enforced by git hooks which run locally on commit, and by the CI build.

Commits must follow the [conventional commit specification](https://www.conventionalcommits.org/en/v1.0.0/#summary). In this case, it means commit subjects must have the following format:

`type(scope): subject`

The type must be one of the following options:

`[ 'build', 'chore', 'ci', 'docs', 'feat', 'fix', 'perf', 'refactor', 'revert', 'style', 'test' ]`

For now - scope is optional but will map to packages / directories of the code base as the project matures.


### Generate API Code

```bash
npx openapi-generator-cli generate -g typescript-fetch -i https://spacelaunchnow.me/api/ll/2.2.0/swagger.json -o src/services/api/ --additional-properties=typescriptThreePlus=true
```

## Acknowledgments

The wonderful devs and librarians over at [The Space Devs](https://thespacedevs.com)!
