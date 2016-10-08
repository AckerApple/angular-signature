SystemJS.config({
  paths: {
    "npm:": "jspm_packages/npm/",
    "github:": "jspm_packages/github/",
    "angular-signature/": "src/"
  },
  browserConfig: {
    "baseURL": "/"
  },
  devConfig: {
    "map": {
      "plugin-babel": "npm:systemjs-plugin-babel@0.0.16",
      "angular": "github:angular/bower-angular@1.5.8"
    }
  },
  transpiler: "plugin-babel",
  packages: {
    "angular-signature": {
      "main": "src/angular-signature.js",
      "meta": {
        "*.js": {
          "loader": "plugin-babel"
        }
      }
    }
  }
});

SystemJS.config({
  packageConfigPaths: [
    "npm:@*/*.json",
    "npm:*.json",
    "github:*/*.json"
  ],
  map: {
    "signature_pad": "npm:signature_pad@1.5.3"
  },
  packages: {}
});
