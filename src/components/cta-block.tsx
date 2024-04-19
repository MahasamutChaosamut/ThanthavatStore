import { fit } from 'sharp';
import { CTABase, CTAContent } from './utils/theme';

type CallToActionProps = {
  background?: any;
  children: React.ReactNode | undefined;
  parentClassName?: string;
  childClassName?: string;
};

const CallToAction: React.FC<CallToActionProps> = ({
  background,
  children,
  parentClassName = '',
  childClassName = '',
}) => {
  const classNames = CTABase + ' ' + parentClassName + ' ' + 'cta-base';
  const contentClassNames = CTAContent + ' ' + childClassName;
  return (
    <div
      className={classNames}
      style={{ 
        backgroundImage: `url(${background})`, 
        backgroundSize: 'cover',
        aspectRatio: '3.66/1',
        width: '100%', 
        border: '1px solid black', 
        boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.5)' 
      }}
    >
      {/* { <div className="component-overlay" /> } */}
      <div className={contentClassNames}>{children}</div>
    </div>
  );
};

export default CallToAction;
