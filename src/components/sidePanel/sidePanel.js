import './sidePanel.css';

const SidePanel = () => {
  return (
    <div className="side-panel">
      <div className="side-panel__header">
        <div className="side-panel__logo">
          <i className="fas fa-paw"></i>
        </div>
        <div className="side-panel__company-name">
          PUPASSURE
        </div>
      </div>
      <div className="side-panel__puppy-photo">
        <img className="puppy-photo__img" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/38816/image-from-rawpixel-id-542207-jpeg.png" alt="logo" />
      </div>
    </div>
  );
};

export default SidePanel;