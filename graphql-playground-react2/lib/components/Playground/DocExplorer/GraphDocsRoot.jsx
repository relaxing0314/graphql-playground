"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var TypeLink_1 = require("./TypeLink");
var stack_1 = require("../util/stack");
var DocsStyles_1 = require("./DocsStyles");
var styled_1 = require("../../../styled");
var GraphDocsRoot = /** @class */ (function (_super) {
    __extends(GraphDocsRoot, _super);
    function GraphDocsRoot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GraphDocsRoot.prototype.render = function () {
        var _a = this.props, schema = _a.schema, sessionId = _a.sessionId;
        var obj = stack_1.serializeRoot(schema);
        return (<DocsRoot className="doc-root">
        <ShowRootType name="Queries" fields={obj.queries} offset={0} sessionId={sessionId}/>
        {obj.mutations.length > 0 && (<ShowRootType name="Mutations" fields={obj.mutations} offset={obj.queries.length} sessionId={sessionId}/>)}
        {obj.subscriptions.length > 0 && (<ShowRootType name="Subscriptions" fields={obj.subscriptions} offset={obj.queries.length + obj.mutations.length} sessionId={sessionId}/>)}
      </DocsRoot>);
    };
    return GraphDocsRoot;
}(React.PureComponent));
exports.default = GraphDocsRoot;
function ShowRootType(_a) {
    var name = _a.name, fields = _a.fields, offset = _a.offset;
    var nonDeprecatedFields = fields.filter(function (data) { return !data.isDeprecated; });
    var deprecatedFields = fields.filter(function (data) { return data.isDeprecated; });
    return (<div>
      <DocsStyles_1.CategoryTitle>{name}</DocsStyles_1.CategoryTitle>
      {nonDeprecatedFields.map(function (field, index) { return (<TypeLink_1.default key={field.name} type={field} x={0} y={offset + index} collapsable={true} lastActive={false}/>); })}
      {deprecatedFields.length > 0 && <br />}
      {deprecatedFields.map(function (field, index) { return (<div key={field.name}>
          <DocsValueComment>
            # Deprecated: {field.deprecationReason}
          </DocsValueComment>
          <TypeLink_1.default type={field} x={0} y={offset + index + nonDeprecatedFields.length} collapsable={true} lastActive={false}/>
        </div>); })}
    </div>);
}
var DocsRoot = styled_1.styled.div(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  padding-left: 6px;\n\n  .doc-category-item .field-name {\n    color: #f25c54;\n  }\n"], ["\n  padding-left: 6px;\n\n  .doc-category-item .field-name {\n    color: #f25c54;\n  }\n"])));
var DocsValueComment = styled_1.styled.p(templateObject_2 || (templateObject_2 = __makeTemplateObject(["\n  color: ", ";\n  padding-right: 16px;\n  padding-left: 16px;\n"], ["\n  color: ", ";\n  padding-right: 16px;\n  padding-left: 16px;\n"])), function (p) { return p.theme.colours.black50; });
var templateObject_1, templateObject_2;
//# sourceMappingURL=GraphDocsRoot.jsx.map