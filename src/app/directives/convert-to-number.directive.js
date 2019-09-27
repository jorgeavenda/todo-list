function convertToNumber () {
  return {
    require: 'ngModel',
    link: function(scope, element, attrs, ngModel) {
      ngModel.$parsers.push(val => parseInt(val, 10));
      ngModel.$formatters.push(val => '' + val);
    }
  };
};

export { convertToNumber };
