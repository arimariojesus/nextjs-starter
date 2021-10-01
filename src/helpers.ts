import { NextApiResponse } from 'next';
import { NextRouter } from 'next/router';

export function isRouterReady(router: NextRouter): boolean {
  return router.asPath !== router.route;
}

export const serverRedirect = (response: NextApiResponse, url: string, status: `permanent` | `temporary`): void => {
  response.setHeader(`location`, url);
  response.statusCode = status === `permanent` ? 301 : 302;
  response.end();
};

export const normalizeInternalLink = (link: string): string => {
  if (link.startsWith(`/`)) {
    return link;
  }

  return `/${link}`;
};

type ClipboardCallback = (text: string) => void;

export function clipboard(text: string, callback?: ClipboardCallback): void {
  const textArea = document.createElement('textarea');

  textArea.innerText = text;
  document.body.appendChild(textArea);
  textArea.select();
  document.execCommand('copy');
  textArea.remove();

  if (typeof callback === 'function') {
    callback(text);
  }
}
