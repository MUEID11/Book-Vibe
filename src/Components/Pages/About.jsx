import bookstore from './../../assets/freddie-marriage-w8JiSVyjy-8-unsplash.jpg'

const About = () => {
  return (
    <div className="">
      <div className="container mx-auto py-10">
        <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="flex flex-col justify-center items-center">
            <img src={bookstore} alt="Bookstore" className="w-4/5 rounded-lg shadow-lg mb-4" />
            <p className="text-lg font-bold text-gray-700 mb-2">Our Bookstore</p>
          </div>
          <div className="flex flex-col justify-center p-6">
            <p className="text-lg text-gray-700 mb-6">
              Welcome to [Book Vibe], your premier destination for quality books. At [Book Vibe], we are dedicated to providing our customers with an exceptional reading experience.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our carefully curated collection features a diverse range of genres, from timeless classics to contemporary bestsellers. Whether you're a passionate bibliophile or just beginning your reading journey, we have something for every reader.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              As avid readers ourselves, we understand the joy and enrichment that books bring to our lives. That's why we strive to create a welcoming environment where you can explore, discover, and indulge in the pleasure of reading.
            </p>
            <p className="text-lg text-gray-700">
              Thank you for choosing [Book Vibe]. We look forward to serving you and helping you find your next literary adventure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
