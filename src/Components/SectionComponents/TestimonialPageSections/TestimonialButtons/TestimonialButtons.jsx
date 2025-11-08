

const TestimonialButtons = () =>{

        {/* Filter Buttons */}
      <div className="flex justify-center flex-wrap gap-4 md:gap-8 mt-6 max-w-4xl mx-auto">
        {buttons.map((btn) => (
          <FilterButton
            key={btn}
            label={btn}
            active={active}
            onClick={setActive}
          />
        ))}
      </div>
};

export default  TestimonialButtons;