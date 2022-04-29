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

## Build

`docker build -t spacelaunchnow-ui:tag .`

```
docker run \
    -it \
    --rm \
    -p 1337:80 \
    spacelaunchnow-ui:tag
```

## Acknowledgments

The wonderful devs and librarians over at [The Space Devs](https://thespacedevs.com)!
