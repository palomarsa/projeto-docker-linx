FROM nginx:alpine
COPY . /usr/share/nginx/html
# Copia o arquivo de configuração do NGINX para o local correto
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 8080
