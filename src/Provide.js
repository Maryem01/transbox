import React from "react";

const Provide = () => {
  return (
    <div className="provide_container">
      <div className="provide_content">
        <div className="quote_content">
          <div className="content">
           
            <div className="quick">
              <h3> Provide quick Tracking your cargo</h3>
            </div> 
            <div className="quote">
              <h5>QUOTE</h5>
            </div>
            <div className="description_quote_transparent">
              <span>Quote</span>
            </div><div className="Rockling">
              <p>
                Rockling Devario deep sea bonefish cutthroat trout streamer fish
                kaluga sailback scorpionfish sand dab, turkeyfish golden loach
                sand diver.
              </p>
            </div>
           

           
            <div className="help_container">
              <div className="card_help">
                <div className="help">
                  <p>How we can help you?</p>
                  <div className="help_button">
                    <button>Contact US</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>         
         <div className="form">

        <div className="form_container">

            <div className="form_input">
              <form>
                <p>Request a quote </p>
                <div className="form_content_one">
                  <input type="text" name="name" placeholder="Full name" />

                  <input type="text" name="name" placeholder="Email" />

                  <input type="text" name="name" placeholder="phone" />

                  <input type="text" name="name" placeholder="Subject" />

                  <input type="text" name="name" placeholder="Delivery City" />

                  <input
                    type="text"
                    name="name"
                    placeholder="City of departure"
                  />
                </div>
                <div className="form_content_two">
                  <select id="select">
                    <option value="">
                      <span>Freight Type</span>
                    </option>
                    <option value="Freight Type">Freight Type</option>
                    <option value="Value 1">Value 1</option>
                    <option value="Value 2">Value 2</option>
                    <option value="Value 3">Value 3</option>
                    <option value="Value 4">Value 4</option>
                    <option value="value5">Value 5</option>
                  </select>

                  <select id="select">
                    <option value="">Incoterms</option>
                    <option value="Freight Type">Incoterms</option>
                    <option value="Value 1">Value 1</option>
                    <option value="Value 2">Value 2</option>
                    <option value="Value 3">Value 3</option>
                    <option value="Value 4">Value 4</option>
                    <option value="value5">Value 5</option>
                  
                  </select>
                  </div>
                  <div className="weight_height">
                    <div className="weight_height_one">
                      <input type="text" name="name" placeholder="Weight " />

                      <input type="text" name="name" placeholder="Height" />
                    </div>
                    <div className="weight_height_two">
                      <input type="text" name="name" placeholder="Weight" />

                      <input type="text" name="name" placeholder="Height" />
                    </div>
                  </div>
                  <div className="box_check">
                    <input type="checkbox"  name="" value="" />
                    <span>Fragile</span>
                    <input type="checkbox"  name="" value="" />
                    <span>Express Delivery</span>
                    <input type="radio" id="radio" name="bbb" value="" />
                    <span>Insurance</span>
                    <input type="radio"  name="" value="" />
                    <span>Express Delivery</span>
                  </div>
                
                <div className="btn_form">
                  <button>REQUEST A QUOTE</button>
                </div>
              </form>
            </div>
          </div>
          </div>
        </div>
      </div>
   
  );
};

export default Provide;
