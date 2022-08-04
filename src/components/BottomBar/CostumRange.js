import { Range, getTrackBackground } from "react-range";


function CostumRange({value,step,min,max,onChange}) {



    return (
        <Range
        values={[value]}
        step={step}
        min={min}
        max={max}
        onChange={values => onChange(values[0])}
        renderTrack={({ props, children }) => (
          <div
            onMouseDown={props.onMouseDown}
            onTouchStart={props.onTouchStart}
            className='group h-8 w-full flex'
            style={{
              ...props.style,
            }}
          >
            <div className='h-1 w-full rounded'
              ref={props.ref}
              style={{
                background: getTrackBackground({
                  values: [value],
                  colors: ["#1db954", "#535353"],
                  min: min,
                  max: max  ,
                }),
                alignSelf: "center"
              }}
            >
              {children}
            </div>
          </div>
        )}
        renderThumb={({ props, isDragged }) => (
          <div className={` h-3 w-3 rounded-full bg-white ${!isDragged?'opacity-0':''} group-hover:opacity-100 `}
            {...props}
            style={{
              ...props.style,
              boxShadow: "0px 2px 4px 0 rgba(0, 0, 0, 0.5)",
            }}
          >
            <div 
            />
          </div>
        )}
      />

    )
}


export default CostumRange;