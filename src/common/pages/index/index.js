import React from 'react';
import { Row, Col, Card, Timeline, Icon } from 'antd';
import EchartsViews from './EchartsViews';
import EchartsProjects from './EchartsProjects';
import './index.scss'

export default class index extends React.Component {
    render() {
        return (
            <div>
              <Row gutter={10} type="flex" justify="space-between" align="bottom">
                <Col span={4}>
                  <div className="cloud-box">
                    <Card>
                      <div className="clear y-center">
                        <div className="pull-left mr-m">
                          <Icon type="heart" className="text-2x text-danger" />
                        </div>
                        <div className="clear">
                          <div className="text-muted">Book Marked</div>
                          <h2>301</h2>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="cloud-box">
                    <Card>
                      <div className="clear y-center">
                        <div className="pull-left mr-m">
                          <Icon type="cloud" className="text-2x" />
                        </div>
                        <div className="clear">
                          <div className="text-muted">Cloud Data</div>
                          <h2>30122</h2>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col span={4}>
                  <div className="cloud-box">
                    <Card>
                      <div className="clear y-center">
                        <div className="pull-left mr-m">
                          <Icon type="camera" className="text-2x text-info" />
                        </div>
                        <div className="clear">
                          <div className="text-muted">Photo</div>
                          <h2>802</h2>
                        </div>
                      </div>
                    </Card>
                  </div>
                  <div className="cloud-box">
                    <Card>
                      <div className="clear y-center">
                        <div className="pull-left mr-m">
                          <Icon type="mail" className="text-2x text-success" />
                        </div>
                        <div className="clear">
                          <div className="text-muted">Mail</div>
                          <h2>102</h2>
                        </div>
                      </div>
                    </Card>
                  </div>
                </Col>
                <Col span={16}>
                  <div className="cloud-box">
                    <Card className={'no-padding'}>
                      <EchartsProjects />
                    </Card>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="cloud-box">
                    <Card>
                      <div className="pb-m">
                        <h3>Site Log</h3>
                        <small>2 Completed，1 still in dev</small>
                      </div>
                      <a className="card-tool"><Icon type="sync" /></a>
                      <Timeline>
                        <Timeline.Item color="#108ee9">
                          <p>More module still developing</p>
                        </Timeline.Item>
                        <Timeline.Item color="red">
                          <p>Refactoring(In dev)</p>
                        </Timeline.Item>
                        <Timeline.Item color="green">imported Redux,Fetch</Timeline.Item>
                        <Timeline.Item color="green">imported Less,React-Router(4.x)</Timeline.Item>
                        <Timeline.Item color="green">Init project</Timeline.Item>
                      </Timeline>
                    </Card>
                  </div>
                </Col>
                <Col span={8}>
                  <div className="cloud-box">
                    <Card>
                      <div className="pb-m">
                        <h3>Visit Statistic</h3>
                        <small>Last 7 days views volume</small>
                      </div>
                      <a className="card-tool"><Icon type="sync" /></a>
                      <EchartsViews />
                    </Card>
                  </div>
                </Col>
              </Row>
            </div>
        )
    }
}
