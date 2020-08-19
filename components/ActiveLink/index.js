import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function ActiveLink({ children, ...props }) {
  const router = useRouter();
  const child = React.Children.only(children);

  let className = child.props.className || '';

  if (isActive(props, router)) {
    className = `${className} ${props.activeClassName}`.trim();
  }

  delete props.activeClassName;

  return <Link {...props}>{React.cloneElement(child, { className })}</Link>;
}

function isActive(props, router) {
  const componentUrl = props.as ? props.as : props.href;
  const routerUrl = props.as ? router.asPath : router.pathname;

  const urlTokens = routerUrl.split('/');

  if (
    props.activateParentDepth &&
    urlTokens.length > props.activateParentDepth
  ) {
    const parentPageIdx = urlTokens.length - 2;
    const componentUrlTokens = componentUrl.split('/');
    return (
      urlTokens[parentPageIdx] == componentUrlTokens[parentPageIdx] &&
      props.activeClassName
    );
  }

  return routerUrl === componentUrl && props.activeClassName;
}
