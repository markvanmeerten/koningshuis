enum HelperRoutes {
  Assets = 'assets',
}

enum GeneralRoutes {
  Overview = 'overview',
}

export const AppRoutes = {
  ...GeneralRoutes,
  ...HelperRoutes,
};
