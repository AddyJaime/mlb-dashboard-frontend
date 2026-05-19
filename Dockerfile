#--------- Stage 1: Build --------#

FROM node:20-alpine AS builder

WORKDIR /app 

# esto sginfica aqui mismo es equivalente a escribir /app/
#  es importante poner  package*.json  arriba para evitar isntalar todo en cada capa 
COPY  package*.json ./

RUN npm ci 

# desactica el open conexion que se hace a vercel la compnia que creo next.js el 1 desactiva esa conexion, va primero que que empice cuaquier operacion 
ENV NEXT_TELEMETRY_DISABLED=1

# esto copia todo lo que esta en mi carpeta actual al codigo fuente al /app/ del container
COPY .  .


# next es un binario que esta en node_modules/.bin/.
# este comando ejecuta el script "build" de mi package.json
RUN npm run build

# -------- Stage 2: Production --------

  FROM node:20-alpine

  WORKDIR /app

  # cuando haces npm run build next.js produce .next/ un binario que esta en node_module
  # pero para correr esto necesitas node module
  # con output: 'standalone' (que vas a agregar en next.config.ts), next.js empaqueta todo lo necesario en una carpeta  .next/standalone/ — incluye un  server.js y los paquetes necesario
  COPY --from=builder /app/.next/standalone ./

  COPY --from=builder /app/.next/static ./.next/static

COPY --from=builder /app/public ./public

# crea un grupo llamado appgroup el s significa sytem group 
# crea un usuario llaamdo appuser
# por defecto docker corre todo como root 
#  Al crear appuser y luego poner USER 
#appuser, el proceso de Node corre con
#permisos limitados.
RUN addgroup -S appgroup && adduser -S appuser -G appgroup
USER appuser 

# Le dice a
  # Node.js en qué puerto escuchar.
ENV PORT=3001

#  acepta conexiones desde
  # cualquier interface, incluyendo desde
  #  otros containers
ENV HOSTNAME=0.0.0.0

# "este container tiene la intención de
  #  usar el puerto 3001"
EXPOSE 3001 


CMD [ "node", "server.js" ]
