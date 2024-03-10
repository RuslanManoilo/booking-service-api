import swaggerJsdoc from "swagger-jsdoc";

const options = {
  definition: {
    openapi: "3.0.1",
    info: {
      title: "Booking service V1 API docs",
      version: "1.0.0",
      description:
        "API documentation for project 'booking-service-api'. [Backend github repository](https://github.com/RuslanManoilo/booking-service-api)",
      license: {
        name: "MIT",
        url: "https://opensource.org/licenses/MIT",
      },
    },
    servers: [{ url: "http://localhost:8888" }],
  },

  // Paths to files with annotations
  apis: [
    "./swagger/swagger-doc.js",
    "../routes/user-router.js",
    "../routes/camping-router.js",
    "../routes/order-router.js",
  ],
};

export const specs = swaggerJsdoc(options);
