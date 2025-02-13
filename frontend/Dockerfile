FROM alpine:3.20

ENV NODE_VERSION 22.13.1
# Establecer el directorio de trabajo
WORKDIR /usr/src/app

# Copiar el package.json y el package-lock.json
COPY package*.json ./

# Instalar las dependencias

RUN apk add --no-cache nodejs npm

RUN npm install

# Copiar el resto de la aplicación
COPY . .


# Exponer el puerto que utilizará la aplicación
EXPOSE 5173

# Comando para ejecutar la aplicación
CMD ["npm", "run", "dev", "--host"]