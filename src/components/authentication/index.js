import React, { Component } from "react";
import CountUp from "react-countup";
import { ChevronDown, X } from "react-feather";
import "./style.scss";

const navigation = {
  voting_pools: {
    title: "Voting Pools",
    items: { new: "New", open: "Open", closed: "Closed" },
  },
  proposals: {
    title: "Proposals",
    items: { new: "New", open: "Open", closed: "Closed" },
  },
  nft_sandbox: {
    title: "NFT Sandbox",
    items: { new: "New submission", open: "Open", closed: "Closed" },
  },
};

export default class Authentication extends Component {
  constructor(props) {
    super(props);
    this.state = { openedCategory: null, category: "voting_pools", tab: "new" };
  }

  render() {
    const Stats = ({ title, value, prefix = null, suffix = null }) => (
      <div className="stats">
        <div className="title">{title}</div>
        <div className="value">
          {prefix !== null && prefix}
          {/* <CountUp separator={","} end={value} decimals={2} /> */}
          {value}
          {suffix !== null && suffix}
        </div>
      </div>
    );

    const Items = ({ category }) => (
      <div className="items-container">
        <div className="title">{navigation[category].title}</div>
        <X onClick={() => this.setState({ openedCategory: null })} />
        {Object.keys(navigation[category]["items"]).map((item, index) => (
          <div
            key={index}
            className="item"
            onClick={() =>
              this.setState({
                openedCategory: null,
                category: category,
                tab: item,
              })
            }
          >
            {navigation[category]["items"][item]}
          </div>
        ))}
      </div>
    );

    return (
      <div className="authentication-container">
        <div className="max-width-container">
          <div className="stats-container">
            <Stats title={"GDAO"} value={(9, 68)} prefix={"$"} />
            <Stats title={"Pools"} value={1132} />
            <Stats title={"Supply"} value={1648273} />
            <Stats title={"Active"} value={428753} />
          </div>
          <div className="navigation-container">
            {Object.keys(navigation).map((n, index) => (
              <div key={index} className="navigation-item">
                <div
                  className={`category${
                    n === this.state.category ? " active" : ""
                  }`}
                  onClick={() => this.setState({ openedCategory: n })}
                >
                  {navigation[n]["title"]}
                </div>
                <ChevronDown
                  onClick={() => this.setState({ openedCategory: n })}
                />
                {n === this.state.openedCategory && <Items category={n} />}
              </div>
            ))}
          </div>
          <div className="panel-header">
            <div className="panel-border" />
            <div className="panel-title">
              <div className="subtitle">
                {navigation[this.state.category].title}
              </div>
              <div className="title">
                {navigation[this.state.category]["items"][this.state.tab]}
              </div>
            </div>
            <div className="panel-border" />
          </div>
          <div className="panel-content">
            Content for: {navigation[this.state.category].title},{" "}
            {navigation[this.state.category]["items"][this.state.tab]}
          </div>
        </div>
      </div>
    );
  }
}
