# Setup

1. `yarn install`
2. `yarn setup`

If this does not work, try:

```
cd frontend
yarn install

cd backend
yarn install
```

# Running

`yarn start:frontend`

`yarn start:backend`

# Before committing

1. `yarn compile:fix`
2. Fix all errors & warnings
3. Commit

# Build into Single Html

`rm -rf build && yarn build && serve -s build`

cd into `index.html` and extract it from `build/index.html`
