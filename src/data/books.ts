import { type Books } from "@prisma/client"

export type TypeBook = Omit<Books, "created_at" | "updated_at" | "id">

export const bookList: TypeBook[] = [
  {
    title: "Atomic Habits",
    author: "James Clear",
    publication_date: new Date("17 Jan 2023"),
    number_of_pages: 352,
    length: 23,
    width: 15,
    weight: 0.5,
    language: "Indonesian",
    description:
      "Atomic Habits: Perubahan Kecil yang Memberikan Hasil Luar Biasa adalah buku kategori self improvement karya James Clear. Pada umumnya, perubahan-perubahan kecil seringkali terkesan tak bermakna karena tidak langsung membawa perubahan nyata pada hidup suatu manusia. Jika diumpamakan sekeping koin tidak bisa menjadikan kaya, suatu perubahan positif seperti meditasi selama satu menit atau membaca buku satu halaman setiap hari mustahil menghasilkan perbedaan yang bisa terdeteksi. Namun hal tersebut tidak sejalan dengan pemikiran James Clear, ia merupakan seorang pakar dunia yang terkenal dengan 'habits' atau kebiasaan. Ia tahu bahwa tiap perbaikan kecil bagaikan menambahkan pasir ke sisi positif timbangan dan akan menghasilkan perubahan nyata yang berasal dari efek gabungan ratusan bahkan ribuan keputusan kecil. Ia menamakan perubahan kecil yang membawa pengaruh yang luar biasa dengan nama atomic habits.\n\n Sebuah sistem revolusioner untuk menjadi 1 persen lebih baik setiap hari. Orang mengira ketika Anda ingin mengubah hidup, Anda perlu memikirkan hal-hal besar. Namun pakar kebiasaan terkenal kelas dunia James Clear telah menemukan sebuah cara lain. Ia tahu bahwa perubahan nyata berasal dari efek gabungan ratusan keputusan kecil—dari mengerjakan dua push-up sehari, bangun lima menit lebih awal, sampai menahan sebentar hasrat untuk menelepon. Ia menyebut semua tadi atomic habits. Dalam buku terobosan ini, Clear pada hakikatnya mengungkapkan bagaimana perubahan perubahan sangat remeh ini dapat tumbuh menjadi hasil-hasil yang sangat mengubah hidup. Ia menyingkap beberapa trik sederhana dalam hidup kita (seni Menumpuk Kebiasaan yang terlupakan, kekuatan tak terduga Aturan Dua Menit, atau trik untuk masuk ke dalam Zona Goldilocks), dan menggali ke dalam teori psikologi dan neurosains paling baru untuk menerangkan mengapa semua itu penting. Dalam rangka itu, ia menceritakan kisah-kisah inspiratif para peraih medali emas Olimpiade, para CEO terkemuka, dan ilmuwan-ilmuwan istimewa yang telah menggunakan sains tentang kebiasaan-kebiasaan kecil untuk tetap produktif, tetap termotivasi, dan bahagia. Perubahan-perubahan kecil ini akan mendatangkan pengaruh revolusioner pada karier Anda, hubungan pribadi Anda, dan hidup Anda.",
    image_url:
      "https://cdn.gramedia.com/uploads/items/Atomic_Habits_C-FRONT_HC_-_Mockup.png",
    isbn: "9786020667188",
  },
  {
    title: "Tenggelamnya Kapal Van Der Wijck",
    author: "Abdul Malik Karim Amrullah",
    publication_date: new Date("3 Dec 2017"),
    number_of_pages: 268,
    length: 20.5,
    width: 14.5,
    weight: 0.28,
    language: "Indonesian",
    description:
      "Zainuddin, seorang pemuda yang berdarah Minang dari ayah dan berdarah Bugis dari ibu–dengan hati penuh harapan dan angan akan sambutan gembira dari keluarga ayahnya–dari tanah kelahirannya, Mengkasar, pergi ke Padang Panjang, kampung halaman sang ayah. Namun, apa yang diinginkannya tidak terjadi. Di kampung halaman dan oleh keluarganya dia dianggap orang asing. Ketidaknyamanan hidup di kampung halamannya terobati karena perkenalannya dengan Hayati. Mereka saling jatuh cinta dalam keikhlasan dan kesucian jiwa.\n\n Tenggelamnya Kapal Van Der Wijk merupakan salah satu novel yang cukup populer, saking populernya novel sampai dibuatkan sebuah film dengan judul yang sama dan hasilnya juga cukup banyak penikmat yang semakin suka dengan cerita tersebut. Novel yang ditulis oleh Abdul Malik Karim Amrullah ini berkisah tentang persoalan adat yang berlaku di daerah Minangkabau (Sumatera Barat). Selain masalah adat, dalam novel ini juga digambarkan tentang adanya diskriminasi yang terjadi di masyarakat Minangkabau pada waktu itu.\n\n Perbedaan latar belakang / status sosial yang menghalangi kisah cinta dua anak manusia bernama Hayati dan Zainudin hingga berakhir dengan kematian tragis berupa tenggelam dalam sebuah kapal yang mereka berdua naiki saat itu. Dalam novel ini terdapat banyak majas-majas yang digunakan terutama oleh Zainudin saat sedang bercakap.",
    image_url: "https://cdn.gramedia.com/uploads/items/img067.jpg",
    isbn: "9786022504160",
  },
  {
    title: "Terusir",
    author: "Abdul Malik Karim Amrullah",
    publication_date: new Date("3 Dec 2017"),
    number_of_pages: 268,
    length: 20.5,
    width: 14.5,
    weight: 0.28,
    language: "Indonesian",
    description:
      "Hamka lahir pada 17 Februari 1908 di Meninjau, Sumatera Barat dan kembali ke Rahmatullah pada 24 Julai 1981 di Jakarta. Nama sebenar Hamka ialah Haji Abdul Malik bin Karim bin Amrullah. Beliau merupakan salah seorang tokoh pendakwah yang disegani dan dihormati di rantau Nusantara, juga seorang yang bijak dan mahir dalam bidang kesusasteraan, penulisan kreatif dan prolifik. Beliau juga adalah seorang pujangga ulung dan ahli fikir Islam tersohor.\n\n Novel yang ditulis oleh Hamka ini mengusung tema tentang isu perempuan yang telantar. Kisahnya diceritakan dengan begitu ringkas namun padat. Buku ini tergolong tipis sehingga membacanya tidak butuh waktu lama. Hanya beberapa jam saja kita sudah bisa menamatkannya. Di dalam buku ini diceritakan bagaimana kehidupan wanita pada zaman itu. Apabila telah menikah maka kehidupannya bergantung kepada suaminya. Apabila ia cerai, pun tak dapat kedudukan baik lagi di mata keluarga. Diceritakan juga begitu banyak wanita yang terjun menjadi kupu-kupu malam karena berbagai alasan.\n\n Beberapa kisah mampu membuat pembaca merasa haru bercampur sedih. Ikut larut di dalamnya. Terutama pada moment dimana Mariah ingin mencium anak semata wayangnya yang sama sekali anak itu tidak mengenalnya. Novel ini sangat recommended untuk dibaca karena didalamnya kita bisa mengambil banyak pelajaran kehidupan, baik kehidupan bagaimana berkeluarga dengan segala konfliknya, juga kehidupan bagaimana nasib perempuan tanpa lelaki sah disampingnya.\n\n Sinopsis\nMariah, ia Mariah. Ibu sekaligus perempuan halus perasaan dan cantik rupanya ini harus terusir karena sang suami, Azhar, termakan dan menelan ﬁtnah dengan bulat-bulat. Lika-liku kehidupannya yang tak berantah pun dimulai. Mariah harus terusir dari rumah suaminya, kemudian terdampar di Medan hingga terjerembab di dunia gelap dan remang di Jakarta. Sebuah mahakarya dari Buya Hamka, sang sastrawan Pujangga Baru. Novel yang akan memainkan dan mencampuradukkan emosi dan; perasaan terdalam kita soal cinta, kehilangan, ﬁtnah permusuhan,dan kasih sayang.",
    image_url: "https://cdn.gramedia.com/uploads/items/9786022502920.jpg",
    isbn: "9786022502920",
  },
]
