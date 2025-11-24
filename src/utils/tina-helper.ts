// Helper function to convert TinaCMS rich-text AST to HTML
export function tinaFieldToHTML(body: any): string {
  if (!body || !body.children) return "";

  return body.children
    .map((node: any) => {
      if (node.type === "p") {
        const content =
          node.children
            ?.map((child: any) => {
              if (child.type === "text") return child.text || "";
              return "";
            })
            .join("") || "";
        return `<p>${content}</p>`;
      }

      if (node.type === "h1") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h1>${content}</h1>`;
      }

      if (node.type === "h2") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h2>${content}</h2>`;
      }

      if (node.type === "h3") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h3>${content}</h3>`;
      }

      if (node.type === "h4") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h4>${content}</h4>`;
      }

      if (node.type === "h5") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h5>${content}</h5>`;
      }

      if (node.type === "h6") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<h6>${content}</h6>`;
      }

      if (node.type === "ul" || node.type === "ol") {
        const tag = node.type;
        const items =
          node.children
            ?.map((li: any) => {
              const content =
                li.children?.map((child: any) => child.text || "").join("") ||
                "";
              return `<li>${content}</li>`;
            })
            .join("") || "";
        return `<${tag}>${items}</${tag}>`;
      }

      if (node.type === "code") {
        const content =
          node.children?.map((child: any) => child.text || "").join("") || "";
        return `<pre><code>${content}</code></pre>`;
      }

      return "";
    })
    .join("");
}
