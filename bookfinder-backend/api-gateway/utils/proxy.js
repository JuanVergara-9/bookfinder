export const forwardRequest = async (service, req, res, path) => {
  try {
    const response = await service({
      method: req.method,
      url: path,
      headers: {
        Authorization: req.headers.authorization,
        'Content-Type': req.headers['content-type']
      },
      data: req.body,
      params: req.params
    });

    res.status(response.status).json(response.data);
  } catch (error) {
    if (error.response) {
      res.status(error.response.status).json(error.response.data);
    } else {
      console.error('Error de conexión con el microservicio:', error);
      res.status(500).json({ error: 'Error en el API Gateway' });
    }
  }
};
