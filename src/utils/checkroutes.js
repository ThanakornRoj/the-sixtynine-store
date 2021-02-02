const checkRoutes = (history, routes) => {
  const { pathname } = history.location;
  return pathname.includes(routes);
};

export default checkRoutes;
