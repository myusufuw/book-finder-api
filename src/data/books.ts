export type TypeBook = {
  id: number
  title: string
  author: string
  publisher: string
  publicationDate?: string
  numberOfPages?: number
  length?: number
  width?: number
  weight?: number
  language?: string
  description?: string
  urlImage?: string
  isbn?: string
}

export const bookList: TypeBook[] = [
  {
    id: 1,
    title: 'Atomic Habits',
    author: 'James Clear',
    publisher: 'Gramedia Pustaka Utama',
    publicationDate: '17 Jan 2023',
    numberOfPages: 352,
    length: 23,
    width: 15,
    weight: 0.5,
    language: 'Indonesian',
    description:
      "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear. Pada umumnya, perubahan-perubahan kecil seringkali terkesan tak bermakna karena tidak langsung membawa perubahan nyata pada hidup suatu manusia. Jika diumpamakan sekeping koin tidak bisa menjadikan kaya, suatu perubahan positif seperti meditasi selama satu menit atau membaca buku satu halaman setiap hari mustahil menghasilkan perbedaan yang bisa terdeteksi. Namun hal tersebut tidak sejalan dengan pemikiran James Clear, ia merupakan seorang pakar dunia yang terkenal dengan 'habits' atau kebiasaan. Ia tahu bahwa tiap perbaikan kecil bagaikan menambahkan pasir ke sisi positif timbangan dan akan menghasilkan perubahan nyata yang berasal dari efek gabungan ratusan bahkan ribuan keputusan kecil. Ia menamakan perubahan kecil yang membawa pengaruh yang luar biasa dengan nama atomic habits.\n\n Sebuah sistem revolusioner untuk menjadi 1 persen lebih baik setiap hari. Orang mengira ketika Anda ingin mengubah hidup, Anda perlu memikirkan hal-hal besar. Namun pakar kebiasaan terkenal kelas dunia James Clear telah menemukan sebuah cara lain. Ia tahu bahwa perubahan nyata berasal dari efek gabungan ratusan keputusan kecil—dari mengerjakan dua push-up sehari, bangun lima menit lebih awal, sampai menahan sebentar hasrat untuk menelepon. Ia menyebut semua tadi atomic habits. Dalam buku terobosan ini, Clear pada hakikatnya mengungkapkan bagaimana perubahan perubahan sangat remeh ini dapat tumbuh menjadi hasil-hasil yang sangat mengubah hidup. Ia menyingkap beberapa trik sederhana dalam hidup kita (seni Menumpuk Kebiasaan yang terlupakan, kekuatan tak terduga Aturan Dua Menit, atau trik untuk masuk ke dalam Zona Goldilocks), dan menggali ke dalam teori psikologi dan neurosains paling baru untuk menerangkan mengapa semua itu penting. Dalam rangka itu, ia menceritakan kisah-kisah inspiratif para peraih medali emas Olimpiade, para CEO terkemuka, dan ilmuwan-ilmuwan istimewa yang telah menggunakan sains tentang kebiasaan-kebiasaan kecil untuk tetap produktif, tetap termotivasi, dan bahagia. Perubahan-perubahan kecil ini akan mendatangkan pengaruh revolusioner pada karier Anda, hubungan pribadi Anda, dan hidup Anda.",
    urlImage:
      'https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png',
    isbn: '9786020667188',
  },
  {
    id: 2,
    title: 'Tenggelamnya Kapal Van Der Wijck',
    author: 'Abdul Malik Karim Amrullah',
    publisher: 'Gramedia Pustaka Utama',
    publicationDate: '3 Des 2017',
    numberOfPages: 268,
    length: 20.5,
    width: 14.5,
    weight: 0.28,
    language: 'Indonesian',
    description:
      'Zainuddin, seorang pemuda yang berdarah Minang dari ayah dan berdarah Bugis dari ibu–dengan hati penuh harapan dan angan akan sambutan gembira dari keluarga ayahnya–dari tanah kelahirannya, Mengkasar, pergi ke Padang Panjang, kampung halaman sang ayah. Namun, apa yang diinginkannya tidak terjadi. Di kampung halaman dan oleh keluarganya dia dianggap orang asing. Ketidaknyamanan hidup di kampung halamannya terobati karena perkenalannya dengan Hayati. Mereka saling jatuh cinta dalam keikhlasan dan kesucian jiwa.\n\n Tenggelamnya Kapal Van Der Wijk merupakan salah satu novel yang cukup populer, saking populernya novel sampai dibuatkan sebuah film dengan judul yang sama dan hasilnya juga cukup banyak penikmat yang semakin suka dengan cerita tersebut. Novel yang ditulis oleh Abdul Malik Karim Amrullah ini berkisah tentang persoalan adat yang berlaku di daerah Minangkabau (Sumatera Barat). Selain masalah adat, dalam novel ini juga digambarkan tentang adanya diskriminasi yang terjadi di masyarakat Minangkabau pada waktu itu.\n\n Perbedaan latar belakang / status sosial yang menghalangi kisah cinta dua anak manusia bernama Hayati dan Zainudin hingga berakhir dengan kematian tragis berupa tenggelam dalam sebuah kapal yang mereka berdua naiki saat itu. Dalam novel ini terdapat banyak majas-majas yang digunakan terutama oleh Zainudin saat sedang bercakap.',
    urlImage: 'https://cdn.gramedia.com/uploads/items/img067.jpg',
    isbn: '9786022504160',
  },
]
