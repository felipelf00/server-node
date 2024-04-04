import {
  errorHandler
} from "./chunk-Q54MZ3BE.mjs";
import {
  checkIn
} from "./chunk-K2HGCMP7.mjs";
import {
  createEvent
} from "./chunk-LCQHWC2H.mjs";
import "./chunk-QVSMQEDQ.mjs";
import {
  getAttendeeBadge
} from "./chunk-YCYLUKTY.mjs";
import {
  getEventAttendees
} from "./chunk-L34A542D.mjs";
import {
  getEvent
} from "./chunk-73RITDFB.mjs";
import {
  registerForEvent
} from "./chunk-VXBQR6AM.mjs";
import "./chunk-JRO4E4TH.mjs";
import "./chunk-JV6GRE7Y.mjs";

// src/server.ts
import fastify from "fastify";
import fastifySwagger from "@fastify/swagger";
import fastifySwaggerUI from "@fastify/swagger-ui";
import {
  serializerCompiler,
  validatorCompiler,
  jsonSchemaTransform
} from "fastify-type-provider-zod";
import fastifyCors from "@fastify/cors";
var app = fastify();
app.register(fastifyCors, {
  origin: "*"
  //autoriza qualquer endereço acessar a API. Em produção, especificar URL do front end http://meufront.com
});
app.register(fastifySwagger, {
  swagger: {
    consumes: ["application/json"],
    produces: ["application/json"],
    info: {
      title: "pass.in",
      description: "Especifica\xE7\xF5es da API para o back-end da aplica\xE7\xE3o pass.in constru\xEDda durante o NWL Unite da Rocketseat.",
      version: "1.0.0"
    }
  },
  transform: jsonSchemaTransform
  //especifica ao swagger que estamos usando zod
});
app.register(fastifySwaggerUI, {
  routePrefix: "/docs"
});
app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);
app.register(createEvent);
app.register(registerForEvent);
app.register(getEvent);
app.register(getAttendeeBadge);
app.register(checkIn);
app.register(getEventAttendees);
app.setErrorHandler(errorHandler);
app.listen({ port: 3333 }).then(() => {
  console.log("HTTP server running!");
});
