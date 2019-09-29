function SpinnerLoader () {
  const spinnerLoader = {};

  spinnerLoader.show = () => {
    spinnerLoader.active = true;
  };

  spinnerLoader.hide = () => {
    spinnerLoader.active = false;
  };

  return spinnerLoader;
};

export { SpinnerLoader };
