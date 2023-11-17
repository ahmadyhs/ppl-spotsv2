interface SpaceFormProps {
  title: string;
  header: string;
  submitForm: () => void;
}

const SpaceForm: React.FC<SpaceFormProps> = ({ title, header, submitForm }) => {
  return (
    <section className="col-span-8 max-h-screen md:col-span-6">
      <title>{title}</title>
      <form
        className="block h-screen overflow-auto"
        // onSubmit={
        //     e => {
        //         e.preventDefault();
        //         submitForm();
        //     }
        // }
      >
        <div className="flex justify-center">
          <p className="mb-5 mt-10 text-3xl font-semibold text-black">
            {header}
          </p>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Nama Tempat</p>
            <input
              type="text"
              className="m-5 w-8/12 rounded-xl border py-2 text-center text-black"
              // value={name}
              // onChange={(e) => setName(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Deskripsi</p>
            <input
              type="text"
              className="m-5 w-8/12 rounded-xl border py-2 text-center text-black"
              // value={desc}
              // onChange={(e) => setDesc(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Harga per jam</p>
            <input
              type="number"
              className="m-5 w-8/12 rounded-xl border py-2 text-center text-black"
              // value={price}
              // onChange={(e) => setPrice(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Kapasitas orang</p>
            <input
              type="number"
              className="m-5 w-8/12 rounded-xl border py-2 text-center text-black"
              // value={capacity}
              // onChange={(e) => setCapacity(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Alamat Kota</p>
            <input
              type="text"
              className="m-5 w-8/12 rounded-xl border py-2 text-center text-black"
              // value={address}
              // onChange={(e) => setAddress(e.target.value)}
            />
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex w-8/12 items-center justify-center">
            <p className="w-4/12 text-xl text-black">Foto</p>
            <div className="m-5 h-20 w-8/12 rounded-xl border-2 border-dashed bg-slate-400">
              <input
                type="file"
                className="h-full w-full p-6 text-black"
                // onChange={(e) => setImage(e.target.files[0])}
              />
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="grid w-8/12 grid-cols-6 items-center justify-center text-black">
            <p className="col-span-6 mb-6 w-4/12 text-xl">Fasilitas tempat</p>
            <input
              type="checkbox"
              value="1"
              // onChange={handleChange}
            />
            <label className="">WiFi</label>

            <input
              type="checkbox"
              value="2"
              // onChange={handleChange}
            />
            <label className="">AC</label>

            <input
              type="checkbox"
              value="3"
              // onChange={handleChange}
            />
            <label className="">Proyektor</label>

            <input
              type="checkbox"
              value="4"
              // onChange={handleChange}
            />
            <label className="">Stop Kontak</label>

            <input
              type="checkbox"
              value="5"
              // onChange={handleChange}
            />
            <label className="">TV LED</label>

            <input
              type="checkbox"
              value="6"
              // onChange={handleChange}
            />
            <label className="">Air Mineral</label>

            <input
              type="checkbox"
              value="7"
              // onChange={handleChange}
            />
            <label className="">Kursi Tambahan</label>

            <input
              type="checkbox"
              value="8"
              // onChange={handleChange}
            />
            <label className="">Flipchart</label>

            <input
              type="checkbox"
              value="9"
              // onChange={handleChange}
            />
            <label className="">Sound System</label>

            <input
              type="checkbox"
              value="10"
              // onChange={handleChange}
            />
            <label className="">Ruang Tunggu</label>

            <input
              type="checkbox"
              value="11"
              // onChange={handleChange}
            />
            <label className="">Parkir Mobil</label>

            <input
              type="checkbox"
              value="12"
              // onChange={handleChange}
            />
            <label className="">Parkir Motor</label>
          </div>
        </div>

        <div className="flex justify-evenly">
          <button
            className="m-4 w-fit bg-green-500 p-3 text-black hover:bg-green-600 active:bg-green-700"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </section>
  );
};

export default SpaceForm;
