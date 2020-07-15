import React from "react";
import Image from "./Image";
import { useInView } from "react-intersection-observer";

const IconDesc = () => {
  return (
    <section className="IconDesc">
      <div className="IconDesc_item">
        <Image
          src="/images/resolution/action_list_icon1.png"
          alt=""
          base="IconDesc"
        />
        <h4>Assigned to You</h4>
        <p>
          The first thing that researchers see in the application is the work
          flow tasks that need their immediate action. The ribbon icon is used
          throughout the applications to mark workflow items.
        </p>
      </div>
      <div className="IconDesc_item">
        <Image
          src="/images/resolution/action_list_icon2.png"
          alt=""
          base="IconDesc"
        />
        <h4>Alert</h4>
        <p>
          A gentle reminders of workflow tasks that need attention as they are
          time sensitive or things that are approaching or have exceeded a
          threshold.
        </p>
      </div>
      <div className="IconDesc_item">
        <Image
          src="/images/resolution/action_list_icon3.png"
          alt=""
          base="IconDesc"
        />
        <h4>Radar</h4>
        <p>
          RESolution automatically pins items to the radar whose progress and
          outcome are likely to interest the researchers. It also include items
          on the horizon that may need attention in the future.
        </p>
      </div>
    </section>
  );
};

export default IconDesc;
