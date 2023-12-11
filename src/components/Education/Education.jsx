const Education = () => {
  return (
    <div>
      <h1 className="text-center text-5xl text-green-700 font-bold pb-4">
        Education
      </h1>

       <div className="grid grid-cols-1 gap-6 md:grid-cols-2 px-4 lg:px-0 py-16">
       <div className="card bg-base-100 shadow-xl border-2 border-green-700">
          <div className="card-body">
              <p className="">Bachelor Degree</p>
               <h2 className="text-xl text-white">Computer Science $ Engineering</h2>
               <p>Dhaka City College</p>
               <p className="text-green-700">2019-present</p>
   
            </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-2 border-green-700">
          <div className="card-body">
              <p className="">Higher Secondary Certification</p>
              <h2 className="text-xl text-white">Dhaka City College</h2>
               <p className="text-green-700">2017-2019</p>
   
            </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-2 border-green-700">
          <div className="card-body">
              <p className="">Secondary School Certificate</p>
               <h2 className="text-xl text-white">St. Francis {` Xavier's Girls'`} School & College</h2>
               <p className="text-green-700">2007-2017</p>
   
            </div>
        </div>


       </div>
    </div>
  );
};

export default Education;
