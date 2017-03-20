import * as React from 'react';
import { esriPromise } from 'esri-promise';

export interface WidgetProps {
    scriptUri?: string,
    map?: __esri.Map,
    view?: __esri.SceneView | __esri.MapView,
    position?: string,
    widgetProperties?: {
        [propName: string]: any
    },
    widgetWatchables?: string[],
    onLoad?: (instance: __esri.Widget) => any,
    onFail?: (e: any) => any,
    onWidgetPropertyChange?: (key: string, value: any) => any
}

interface ComponentState {
    scriptUri: string,
    map: __esri.Map,
    view: __esri.View,
    instance: __esri.Widget,
    widgetProperties: __esri.WidgetProperties,
    widgetWatchables: string[]
}

export default class Widget extends React.Component<WidgetProps, ComponentState> {
    constructor(props) {
        super(props);
        this.state = {
            scriptUri: this.props.scriptUri,
            map: this.props.map,
            view: this.props.view,
            instance: null,
            widgetProperties: this.props.widgetProperties,
            widgetWatchables: this.props.widgetWatchables
        }
        this.renderWidget = this.renderWidget.bind(this);
    }

    componentDidMount() {
      esriPromise([
        this.props.scriptUri
      ]).then(([
        Widget
      ]) => {
        this.renderWidget(Widget);
        // this.registerStateChanges(this.state.instance, 'widgetProperties', this.props.widgetWatchables, this.props.onWidgetPropertyChange);
        if (this.props.onLoad) {
          this.props.onLoad(this.state.instance);
        }
      }).catch((e) => {
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }

    componentWillUnmount() {
      this.state.view.ui.remove(this.state.instance);
    }

    render() {
        return null;
    }

    private renderWidget(Widget: __esri.WidgetConstructor) {
      const widgetProperties = { view: this.state.view, ...this.props.widgetProperties };
      const position = this.props.position ? this.props.position : 'manual';
      const instance = new Widget(widgetProperties);
      this.setState({ instance });
      this.state.view.ui.add(instance, { position });
    }
}