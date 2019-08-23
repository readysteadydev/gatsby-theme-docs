/** @jsx jsx */
import { jsx } from "theme-ui";
import { Link } from "gatsby";
import DocTreeItem from "./DocTreeItem";
import { getPath } from "../util/paths";

const containsChild = (items, child, basePath) => {
  items = items || [];
  const foundItems = items.map(item => {
    const itemLink = getPath(item.link, basePath);
    if (itemLink !== child) {
      return containsChild(item.items, child, basePath);
    } else {
      return true;
    }
  });
  return foundItems.includes(true);
};

const DocTree = props => {
  const {
    basePath,
    tree,
    depth = 0,
    currentPath,
    expanded = {},
    setExpanded
  } = props;

  // Will pass these to branches.
  const extraProps = {
    currentPath,
    expanded,
    basePath,
    setExpanded
  };

  const Tree = tree.map((item, i) => {
    const leaves = item.items || [];
    const hasLeaves = leaves.length > 0;
    const itemLink = getPath(item.link, basePath);
    const isActive = itemLink === currentPath;

    const isActiveOrActiveChild =
      isActive ||
      (hasLeaves && containsChild(item.items, currentPath, basePath));

    if (isActiveOrActiveChild && !expanded[itemLink]) {
      expanded[itemLink] = true;
      setExpanded({
        ...expanded
      });
    }

    let isExpanded = expanded[itemLink] || false;

    const TreeItems =
      hasLeaves && isExpanded ? (
        <DocTree
          key={itemLink}
          tree={leaves}
          depth={depth + 1}
          {...extraProps}
        />
      ) : null;

    const expander = !hasLeaves ? null : (
      <span
        className={`doctree-item-expander ${
          isExpanded ? "expanded" : "collapsed"
        }`}
        onClick={e => {
          e.preventDefault();

          setExpanded({
            ...expanded,
            [itemLink]:
              isExpanded && containsChild(item.items, currentPath, basePath)
                ? true
                : !isExpanded
          });
        }}
        sx={{
          display: "inline-block",
          width: ["30px",'0'],
          height: ["30px",'0'],
          borderStyle: "solid",
          borderWidth: ["3px","0 7px 14px 7px"],
          borderRadius: ['40px','0'],
          borderColor: ['hsl(0, 0%, 50%)',"transparent transparent hsl(0, 0%, 60%) transparent"],
          position: "absolute",
          left: ["-32px","-24px"],
          transform: isExpanded
            ? "rotate(180deg) scale(0.8)"
            : "rotate(90deg) scale(0.8)",
          variant: `layout.DocTreeItemExpander.${
            isExpanded ? "expanded" : "collapsed"
          }`
        }}
      />
    );

    return (
      <div key={`item-${itemLink}`}>
        <DocTreeItem
          className={`level${depth} ${isActive ? "active" : ""} ${
            hasLeaves ? "leafy" : ""
          }`}
          sx={{
            margin: ['15px 20px','10px 15px'],
            paddingLeft: `${depth * 12}px`,
            variant: "layout.DocTreeItem"
          }}
        >
          <Link
            sx={{
              textDecoration: 'none',
              variant: "styles.Link"
            }}
            key={`link-${itemLink}`}
            to={itemLink}
          >
            <label
              sx={{
                display: "flex",
                alignItems: "center",
                cursor: "pointer",
                position: "relative"
              }}
            >
              {expander}
              {item.title}
            </label>
          </Link>
        </DocTreeItem>
        {TreeItems}
      </div>
    );
  });

  return Tree;
};

export default DocTree;
