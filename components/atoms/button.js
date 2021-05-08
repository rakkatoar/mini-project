export default function button({ groupTaskId, float, icon, value, color, height, fontSize, background, border, radius, padding, position, bottom, marginTop, marginBottom, marginRight, width, weight, display, topIcon, onClick }) {
  return (
    
  <button
  onClick={onClick} className={groupTaskId} style={{ float:float, width: width ? width : "150px",
  height: height ? height : "43px", color: color, fontWeight:weight, fontSize: fontSize, background: background, border: border, borderRadius: radius, display:display, padding: padding, position: position, bottom: bottom, marginTop: marginTop, marginBottom: marginBottom, marginRight:marginRight}}>
    {icon ? (
        <>
							{ value ? (
          <div className="row">
            <div className="col-2">
              <img
                style={{ position: "absolute", left: "6px", top: topIcon ? topIcon : "0px" }}
                src={icon}
              />
						</div>
							
							<div className="col-10">
								{value}
							</div>
					</div>
						) : (<img
							style={{ position: "absolute", left: "15px", top: topIcon ? topIcon : "6px" }}
							src={icon}
						/>) }
						</>
      ) : (
        <span>{value}</span>
      )}
  </button>
  );
}