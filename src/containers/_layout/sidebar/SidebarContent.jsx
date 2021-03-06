import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SidebarLink from './SidebarLink';
import SidebarCategory from './SidebarCategory';

class SidebarContent extends Component {
  static propTypes = {
    changeToDark: PropTypes.func.isRequired,
    changeToLight: PropTypes.func.isRequired,
    onClick: PropTypes.func.isRequired,
  };

  hideSidebar = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="sidebar__content">
        <ul className="sidebar__block">
          <SidebarLink title="Traffic Analysis" icon="chart-bars" route="/dashboard_default" onClick={this.hideSidebar} />
          <SidebarLink
            title="Web Monitoring"
            icon="chart-bars"
            route="/dashboard_e_commerce"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Conversion Analytics"
            icon="chart-bars"
            newLink
            route="/dashboard_default"
            onClick={this.hideSidebar}
          />
          <SidebarLink
            title="Current AB Tests"
            icon="chart-bars"
            newLink
            route="/dashboard_default"
            onClick={this.hideSidebar}
          />
          <SidebarCategory title="Color Mode" icon="layers">
            <button className="sidebar__link" onClick={this.props.changeToLight}>
              <p className="sidebar__link-title">Light GUI</p>
            </button>
            <button className="sidebar__link" onClick={this.props.changeToDark}>
              <p className="sidebar__link-title">Dark GUI</p>
            </button>
          </SidebarCategory>
        </ul>
        <ul className="sidebar__block">
          <SidebarLink title="DEV TOOLS" icon="rocket"></SidebarLink>
          <SidebarCategory title="UI Elements" icon="diamond">
            <SidebarLink title="Alerts" route="/ui/alerts" onClick={this.hideSidebar} />
            <SidebarLink title="Buttons" route="/ui/buttons" onClick={this.hideSidebar} />
            <SidebarLink title="Carousel" route="/ui/carousel" onClick={this.hideSidebar} />
            <SidebarLink title="Collapse" route="/ui/collapse" onClick={this.hideSidebar} />
            <SidebarLink title="Grids" route="/ui/grids" onClick={this.hideSidebar} />
            <SidebarLink title="Modals" route="/ui/modals" onClick={this.hideSidebar} />
            <SidebarLink title="Notifications" route="/ui/notifications" onClick={this.hideSidebar} />
            <SidebarLink title="Panels" route="/ui/panels" onClick={this.hideSidebar} />
            <SidebarLink title="Progress Bars" route="/ui/progress_bars" onClick={this.hideSidebar} />
            <SidebarLink title="Range Sliders" route="/ui/range_sliders" onClick={this.hideSidebar} />
            <SidebarLink title="Tabs" route="/ui/tabs" onClick={this.hideSidebar} />
            <SidebarLink title="Timeline" route="/ui/timeline" onClick={this.hideSidebar} />
            <SidebarLink title="Tooltips & Popovers" route="/ui/tooltips" onClick={this.hideSidebar} />
            <SidebarLink title="Typography" route="/ui/typography" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Tables" icon="list" isNew>
            <SidebarLink title="Basic tables" route="/tables/basic_tables" onClick={this.hideSidebar} />
            <SidebarLink title="Data table" route="/tables/data_table" onClick={this.hideSidebar} />
            <SidebarLink title="Editable table" route="/tables/editable_table" onClick={this.hideSidebar} />
            <SidebarLink title="Material table" newLink route="/tables/material_table" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Charts" icon="chart-bars">
            <SidebarLink title="ChartsJS" route="/charts/charts_js" onClick={this.hideSidebar} />
            <SidebarLink title="React-vis" route="/charts/react_vis" onClick={this.hideSidebar} />
            <SidebarLink title="Recharts" route="/charts/recharts" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarCategory title="Maps" icon="map">
            <SidebarLink title="Google map" route="/maps/google_map" onClick={this.hideSidebar} />
            <SidebarLink title="Vector map" route="/maps/vector_map" onClick={this.hideSidebar} />
          </SidebarCategory>
          <SidebarLink
            title="Documentation"
            icon="text-align-justify"
            route="/documentation/introduction"
            onClick={this.hideSidebar}
          />
        </ul>
      </div>
    );
  }
}

export default SidebarContent;
