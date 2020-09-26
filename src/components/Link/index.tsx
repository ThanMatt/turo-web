import React from 'react'
import { Link as RLink, LinkProps as RLinkProps } from 'react-router-dom'
import { Link as CHLink, LinkProps as CHLinkProps } from '@chakra-ui/core'

type LinkProps = CHLinkProps &
  RLinkProps & {
    label?: string
  }

export const Link: React.FC<LinkProps> = ({ label, ...linkProps }) => {
  return (
    <>
      {/*
      // @ts-ignore */}
      <CHLink as={RLink} {...linkProps}>
        {label}
      </CHLink>
    </>
  )
}
