const prod = {
    catalogAPIurl: "http://gataria.example/catalog",
    imagesAPIurl: "http://gataria.example/images"
};

const dev = {
    catalogAPIurl: "http://20.197.229.124:30010/catalog",
    imagesAPIurl: "http://20.197.229.124:30020/images"
};

const config =
  process.env.REACT_APP_STAGE === "prod"
  ? prod
  : process.env.REACT_APP_STAGE === "dev"
    ? dev
    : dev;

export default {
    ...config
};
