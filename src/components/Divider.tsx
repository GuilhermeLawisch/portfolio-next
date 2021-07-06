import React from 'react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

type IProps = {
  position?: '1' | '2';
}

const Divider = (props: IProps) => {
  return (
    <>
      <div className="divider">
        <div className={`divider-${props.position}`} />
      </div>
    </>
  )
}

export { Divider }