/**
 * Lightweight syntax highlighter for workshop code snippets.
 * No external dependencies — keeps the bundle small for students on slow Wi-Fi.
 *
 * Returns HTML strings with <span> classes for coloring tokens.
 * Used by the <CodeBlock /> component.
 */

const KEYWORDS = new Set([
  "const",
  "let",
  "var",
  "function",
  "return",
  "import",
  "export",
  "default",
  "from",
  "if",
  "else",
  "for",
  "while",
  "class",
  "extends",
  "new",
  "this",
  "true",
  "false",
  "null",
  "undefined",
  "async",
  "await",
  "try",
  "catch",
  "throw",
  "typeof",
  "interface",
  "type",
]);

function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function wrap(className: string, text: string): string {
  return `<span class="${className}">${text}</span>`;
}

/**
 * Tokenize a line of code and return highlighted HTML.
 */
export function highlightLine(line: string, language: string): string {
  const escaped = escapeHtml(line);

  if (language === "bash" || language === "shell") {
    // Highlight comments starting with #
    if (line.trimStart().startsWith("#")) {
      return wrap("text-zinc-500 dark:text-zinc-400", escaped);
    }
    // Highlight commands (first word)
    const match = escaped.match(/^(\s*)(\S+)(.*)$/);
    if (match) {
      return `${match[1]}${wrap("text-sky-400", match[2])}${match[3]}`;
    }
    return escaped;
  }

  let result = "";
  let i = 0;

  while (i < escaped.length) {
    const ch = escaped[i];

    // Single-line comment
    if (ch === "/" && escaped[i + 1] === "/") {
      result += wrap("text-zinc-500 dark:text-zinc-400", escaped.slice(i));
      break;
    }

    // String literals (single or double quotes)
    if (ch === '"' || ch === "'" || ch === "`") {
      const quote = ch;
      let j = i + 1;
      while (j < escaped.length && escaped[j] !== quote) {
        if (escaped[j] === "\\") j++;
        j++;
      }
      j++;
      result += wrap("text-emerald-500 dark:text-emerald-400", escaped.slice(i, j));
      i = j;
      continue;
    }

    // JSX tags
    if (ch === "&" && escaped.slice(i, i + 4) === "&lt;") {
      const closeIdx = escaped.indexOf("&gt;", i);
      if (closeIdx !== -1) {
        result += wrap("text-sky-400 dark:text-sky-300", escaped.slice(i, closeIdx + 4));
        i = closeIdx + 4;
        continue;
      }
    }

    // Numbers
    if (/\d/.test(ch) && (i === 0 || /[\s(,=+\-*/<>!]/.test(escaped[i - 1]))) {
      let j = i;
      while (j < escaped.length && /[\d.]/.test(escaped[j])) j++;
      result += wrap("text-amber-500 dark:text-amber-400", escaped.slice(i, j));
      i = j;
      continue;
    }

    // Words (keywords, identifiers)
    if (/[a-zA-Z_$]/.test(ch)) {
      let j = i;
      while (j < escaped.length && /[\w$]/.test(escaped[j])) j++;
      const word = escaped.slice(i, j);
      if (KEYWORDS.has(word)) {
        result += wrap("text-purple-500 dark:text-purple-400", word);
      } else if (word === "useState" || word === "useEffect" || word === "useClient") {
        result += wrap("text-pink-500 dark:text-pink-400", word);
      } else {
        result += word;
      }
      i = j;
      continue;
    }

    result += ch;
    i++;
  }

  return result;
}

/** Highlight an entire multi-line code string, returning an array of HTML lines. */
export function highlightCode(code: string, language = "tsx"): string[] {
  return code.split("\n").map((line) => highlightLine(line, language));
}
