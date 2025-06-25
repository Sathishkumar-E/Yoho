function Main() {
  return (
        <main className="p-4">
          <section className="bg-white shadow-md rounded-lg p-6">
            <div className="overflow-hidden whitespace-nowrap">
              <div className="animation-marquee">
                <h1 className="text-3xl font-semibold mb-4 text-purple-700 text-center animate-pulse">Welcome to Devanga Chettiar Higher Secondary
                  School</h1>
              </div>
            </div>
            <div className="text-lg">
              <p className="text-2xl text-gray-700 py-2">Welcome to our school's official website! </p>
              <p className="indent-25 py-2">We are delighted that you are considering joining our educational community.
              </p>
              <p className="indent-25 py-2">At our school, we believe that every child has the potential to achieve
                greatness. Our mission is to provide a safe, nurturing, and inspiring environment where students can
                grow academically, socially, and emotionally. With a balanced focus on academics, co-curricular
                activities, and values-based education, we aim to prepare our students not just for exams, but for
                life.</p>
              <p className="indent-25 py-2">Our dedicated and experienced school management team is committed to upholding
                high standards of education and personal development. With a vision rooted in excellence and a
                passion for lifelong learning, we strive to create opportunities that help every student succeed.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                <div className="box-content border-transparent m-auto h-5px w-5px p-10 shadow-2xl transform hover:scale-105 transition duration-300">
                  <a href="http://www.youtube.com"><img src="src/assets/facilities.jpg" alt="School-facilities" className="w-lg h-lg"/></a>
                  <h3 className="p-4 uppercase text-2xl text-blue-600">Our Facilities</h3>
                  <p>The school is furnished with spacious class rooms, well stocked library, separate laboratories for physics, chemistry, biology and computer science.</p>
                </div>
                <div className="box-content border-transparent m-auto h-5px w-5px p-10 shadow-2xl transform hover:scale-105 transition duration-300">
                  <a href="http://www.youtube.com"><img src="src/assets/smart_class.jpg" alt="Smart-class" className="w-lg h-lg" /></a>
                  <h3 className="p-4 uppercase text-2xl text-blue-600">Smart Class</h3>
                  <p>Smart Class facility is available for our students. Educomp smart class is an interactive whiteboard digital technology designed to assist teachers as a visual aid.</p>
                </div>
                <div className="box-content border-transparent m-auto h-5px w-5px p-10 shadow-2xl transform hover:scale-105 transition duration-300">
                  <a href="http://www.youtube.com"><img src="src/assets/transportation.jpg" alt="Transportation" className="w-lg h-lg" /></a>
                  <h3 className="p-4 uppercase text-2xl text-blue-600">Transportation</h3>
                  <p>Transport is an essential part of the infrastructural features offered by a school. It's a basic job in crossing over any geographical barrier of the school.</p>
                </div>

              </div>
              <p className="indent-25 py-2">We invite you to explore our website, learn more about our programs, and get
                to know what makes our school a wonderful place for young minds to learn and thrive.</p>
              <p className="indent-15 py-2">Thank you for visiting, and we look forward to welcoming you into our school
                family.</p>
              <p>Warm regards, <br />Devanga Chettiar Higher Secondary School <br />Management Team</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-15">
              <div className="box-border border-transparent m-auto h-5px w-5px p-15  shadow-xl rounded-2xl bg-amber-200 transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold p-2 text-blue-700 uppercase">Matlab</h3>
                <p>The Mathematics laboratory is a place where anybody can experiment and explore patterns and
                  ideas.</p>
              </div>
              <div className="box-border m-auto h-5px w-8px p-15 border-transparent shadow-xl rounded-2xl bg-amber-200 transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold p-2 text-blue-700 uppercase">Hostel & Gymnasium</h3>
                <p>The Mathematics laboratory is a place where anybody can experiment and explore patterns and
                  ideas.</p>
              </div>
              <div className="box-border m-auto h-5px w-5px p-15 border-transparent shadow-xl rounded-2xl bg-amber-200 transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold p-2 text-blue-700 uppercase">smart class</h3>
                <p>The Mathematics laboratory is a place where anybody can experiment and explore patterns and
                  ideas.</p>
              </div>
              <div className="box-border m-auto h-5px w-5px p-15 border-transparent shadow-xl rounded-2xl bg-amber-200 transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold p-2 text-blue-700 uppercase">co-curricular</h3>
                <p>The Mathematics laboratory is a place where anybody can experiment and explore patterns and
                  ideas.</p>
              </div>
              <div className="box-border m-auto h-5px w-5px p-15 border-transparent shadow-xl rounded-2xl bg-amber-200 transform hover:scale-105 transition duration-300">
                <h3 className="text-xl font-semibold p-2 text-blue-700 uppercase">sports</h3>
                <p>The Mathematics laboratory is a place where anybody can experiment and explore patterns and
                  ideas.</p>
              </div>
            </div>
          </section>
          <section className="mt-6">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <a href="#" className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600">View Students</a>
              <a href="#" className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600">Manage Teachers</a>
              <a href="#" className="bg-blue-500 text-white p-4 rounded-lg shadow hover:bg-blue-600">Class Schedules</a>
            </div>
          </section>
        </main>
  );
}

export default Main;