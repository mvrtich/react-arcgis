import { esriPromise } from 'esri-promise';
import * as React from 'react';

export interface GeometryProps {
    scriptUri: string;
    graphic?: __esri.Graphic;
    geometryProperties?: {
      [propName: string]: any;
    };
    registerGeometry?: (intance: __esri.Geometry) => any;
    onLoad?: (instance: __esri.Geometry) => any;
    onFail?: (e: any) => any;
}

interface ComponentState {
    scriptUri: string;
    graphic: __esri.Graphic;
    instance: __esri.Geometry;
}

export default class Geometry extends React.Component<GeometryProps, ComponentState> {
    constructor(props) {
        super(props);
        this.state = {
            graphic: this.props.graphic,
            instance: null,
            scriptUri: this.props.scriptUri,
        }
        this.createGeometry = this.createGeometry.bind(this);
    }

    public render() {
        return null;
    }

    private componentDidMount() {
      esriPromise([
        this.props.scriptUri
      ]).then(([
        Geometry
      ]) => {
        this.createGeometry(Geometry)
        if (this.props.onLoad) {
          this.props.onLoad(this.state.instance);
        }
      }).catch((e) => {
        if (this.props.onFail) {
          this.props.onFail(e);
        }
      });
    }


    private createGeometry(Geometry: __esri.GeometryConstructor) {
      const instance = new Geometry(this.props.geometryProperties);
      this.setState({ instance });
      this.props.registerGeometry(instance);
    }
}
