import * as React from 'react';

export interface ExternalProps {
  title: string;
}

export const withPage = (props: ExternalProps) =>
  <OriginalProps extends {}>(
    WrappedComponent: React.ComponentType<OriginalProps>
  ) => () => (
    <div className="ui grid">
      <div className="row">
        <h1 className="ui huge header">
          {props.title}
        </h1>
      </div>
      <div className="ui divider"/>
      <WrappedComponent/>
    </div>
  );