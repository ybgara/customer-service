# Gunakan image Node.js versi terbaru sebagai base image
FROM node:latest

# Buat direktori kerja di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json ke dalam direktori kerja
COPY package*.json ./

# Install dependensi yang diperlukan
RUN npm install

# Salin seluruh kode aplikasi ke dalam direktori kerja
COPY . .

# Port yang akan digunakan oleh aplikasi
EXPOSE 8080

# Perintah untuk menjalankan aplikasi saat container dimulai
CMD ["node", "app.js"]
