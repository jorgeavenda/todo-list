function SpinnerLoaderService () {
  this.show = () => {
    this.active = true;
  };

  this.hide = () => {
    this.active = false;
  };
};

export { SpinnerLoaderService };
