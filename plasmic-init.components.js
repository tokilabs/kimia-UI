import { initPlasmicLoader } from '@plasmicapp/loader-react';
import { Accordion } from '../packages/accordion/index.tsx';
import { AccordionItem } from '../packages/accordion/index.tsx';
import { AccordionPanel } from '../packages/accordion/index.tsx';
import { Card } from '../packages/card/index.tsx';
import { CardBody } from '../packages/card/index.tsx';
import { CardTitle } from '../packages/card/index.tsx';
import { CardText } from '../packages/card/index.tsx';
import { Code } from '../packages/code/index.tsx';
import { Menu } from '../packages/curtain-menu/index.tsx';
import { MenuContainer } from '../packages/curtain-menu/index.tsx';
import { MenuItem } from '../packages/curtain-menu/index.tsx';
import { Drawer } from '../packages/drawer/index.tsx';
import { DrawerHeader } from '../packages/drawer/index.tsx';
import { DrawerBody } from '../packages/drawer/index.tsx';
import { DrawerFooter } from '../packages/drawer/index.tsx';
import { Dropdown } from '../packages/dropdown/index.tsx';
import { DropdownToggle } from '../packages/dropdown/index.tsx';
import { DropdownMenu } from '../packages/dropdown/index.tsx';
import { DropdownItem } from '../packages/dropdown/index.tsx';
import { DropdownDivider } from '../packages/dropdown/index.tsx';
import { HamburgerMenu } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuBrand } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuToggler } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuCollapse } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuNav } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuItem } from '../packages/hamburger-menu/index.tsx';
import { HamburgerMenuLink } from '../packages/hamburger-menu/index.tsx';
import { ListGroup } from '../packages/list-group/index.tsx';
import { ListGroupItem } from '../packages/list-group/index.tsx';
import { Modal } from '../packages/modal/index.tsx';
import { ModalHeader } from '../packages/modal/index.tsx';
import { ModalBody } from '../packages/modal/index.tsx';
import { ModalFooter } from '../packages/modal/index.tsx';
import { Navbar } from '../packages/navbar/index.tsx';
import { NavbarBrand } from '../packages/navbar/index.tsx';
import { NavbarToggler } from '../packages/navbar/index.tsx';
import { NavbarCollapse } from '../packages/navbar/index.tsx';
import { NavbarNav } from '../packages/navbar/index.tsx';
import { NavbarItem } from '../packages/navbar/index.tsx';
import { NavbarLink } from '../packages/navbar/index.tsx';
import { Sidenav } from '../packages/sidenav/index.tsx';
import { SidenavItem } from '../packages/sidenav/index.tsx';
import { Tab } from '../packages/tab/index.tsx';

export const PLASMIC = initPlasmicLoader( {
  projects: [
    {
      id: "'hSC5XMAvbDbmF4e5kuW6xC'",
      token: "'aMnJBW2asqkE8YPeKdilxweA1Zx2ZUXyfNie65cwLZAbJZK5Gd2DGnsF3Mrd6dzPzYN95cD04l79PQgqsGA'"
    }
  ],
  // Fetches the latest revisions, whether or not they were unpublished!
  // Disable for production to ensure you render only published changes.
  preview: true,
}
);


PLASMIC.registerComponent(Accordion, {
  name: "Accordion",
  props: {
    children: 'string', // any
    defaultPanel: 'string', // string
  }
}
);


PLASMIC.registerComponent(AccordionItem, {
  name: "AccordionItem",
  props: {
    toggle: 'string', // string
    children: 'string', // any
    color: {
      "type": "choice",
      "options": [
        "gray",
        "indigo",
        "green"
      ]
    }, // (UNION) "gray" | "indigo" | "green"
  }
}
);


PLASMIC.registerComponent(AccordionPanel, {
  name: "AccordionPanel",
  props: {
    children: 'string', // any
    id: 'string', // string
  }
}
);


PLASMIC.registerComponent(Card, {
  name: "Card",
  props: {
    className: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
    defaultChecked: 'boolean', // (UNION) boolean
    defaultValue: 'string', // (UNION) string | number | ReadonlyArray<string>
    suppressContentEditableWarning: 'boolean', // (UNION) boolean
    suppressHydrationWarning: 'boolean', // (UNION) boolean
    accessKey: 'string', // string
    contentEditable: 'string', // (UNION) Booleanish | "inherit"
    contextMenu: 'string', // string
    dir: 'string', // string
    draggable: 'string', // (UNION) Booleanish
    hidden: 'boolean', // (UNION) boolean
    id: 'string', // string
    lang: 'string', // string
    placeholder: 'string', // string
    slot: 'string', // string
    spellCheck: 'string', // (UNION) Booleanish
    style: 'string', // React.CSSProperties
    tabIndex: 'string', // number
    title: 'string', // string
    translate: {
      "type": "choice",
      "options": [
        "yes",
        "no"
      ]
    }, // (UNION) "yes" | "no"
    radioGroup: 'string', // string
    role: 'string', // (UNION) React.AriaRole
    about: 'string', // string
    datatype: 'string', // string
    inlist: 'string', // any
    prefix: 'string', // string
    property: 'string', // string
    resource: 'string', // string
    typeof: 'string', // string
    vocab: 'string', // string
    autoCapitalize: 'string', // string
    autoCorrect: 'string', // string
    autoSave: 'string', // string
    color: 'string', // string
    itemProp: 'string', // string
    itemScope: 'boolean', // (UNION) boolean
    itemType: 'string', // string
    itemID: 'string', // string
    itemRef: 'string', // string
    results: 'string', // number
    security: 'string', // string
    unselectable: {
      "type": "choice",
      "options": [
        "on",
        "off"
      ]
    }, // (UNION) "on" | "off"
    inputMode: {
      "type": "choice",
      "options": [
        "none",
        "search",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal"
      ]
    }, // (UNION) "none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"
    is: 'string', // string
    dangerouslySetInnerHTML: 'string', // { __html: string; }
    onCopy: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCopyCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCut: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCutCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPaste: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPasteCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCompositionEnd: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionEndCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStart: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStartCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdate: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdateCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onFocus: 'string', // React.FocusEventHandler<HTMLDivElement>
    onFocusCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlur: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlurCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onChange: 'string', // React.FormEventHandler<HTMLDivElement>
    onChangeCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onReset: 'string', // React.FormEventHandler<HTMLDivElement>
    onResetCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmit: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmitCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalid: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalidCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onLoad: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onError: 'string', // React.ReactEventHandler<HTMLDivElement>
    onErrorCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onKeyDown: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyDownCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPress: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPressCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUp: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUpCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onAbort: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAbortCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThrough: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThroughCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptied: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptiedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncrypted: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncryptedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEnded: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEndedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedData: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedDataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadata: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStart: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStartCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPause: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPauseCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlaying: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgress: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgressCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeked: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeking: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalled: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalledCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspend: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspendCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdate: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdateCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaiting: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaitingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAuxClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onAuxClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenu: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenuCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDrag: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnd: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEndCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnter: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnterCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExit: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExitCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeave: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeaveCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOver: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOverCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStart: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStartCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDrop: 'string', // React.DragEventHandler<HTMLDivElement>
    onDropCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onMouseDown: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseDownCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseEnter: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseLeave: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMove: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMoveCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOut: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOutCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOver: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOverCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUp: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUpCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onSelect: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSelectCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTouchCancel: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchCancelCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEnd: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEndCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMove: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMoveCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStart: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStartCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onPointerDown: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerDownCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMove: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMoveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUp: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUpCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancel: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancelCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnter: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnterCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeave: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeaveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOver: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOverCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOut: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOutCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onScroll: 'string', // React.UIEventHandler<HTMLDivElement>
    onScrollCapture: 'string', // React.UIEventHandler<HTMLDivElement>
    onWheel: 'string', // React.WheelEventHandler<HTMLDivElement>
    onWheelCapture: 'string', // React.WheelEventHandler<HTMLDivElement>
    onAnimationStart: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationStartCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEnd: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEndCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIteration: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIterationCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onTransitionEnd: 'string', // React.TransitionEventHandler<HTMLDivElement>
    onTransitionEndCapture: 'string', // React.TransitionEventHandler<HTMLDivElement>
  }
}
);


PLASMIC.registerComponent(CardBody, {
  name: "CardBody",
  props: {
    className: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
    defaultChecked: 'boolean', // (UNION) boolean
    defaultValue: 'string', // (UNION) string | number | ReadonlyArray<string>
    suppressContentEditableWarning: 'boolean', // (UNION) boolean
    suppressHydrationWarning: 'boolean', // (UNION) boolean
    accessKey: 'string', // string
    contentEditable: 'string', // (UNION) Booleanish | "inherit"
    contextMenu: 'string', // string
    dir: 'string', // string
    draggable: 'string', // (UNION) Booleanish
    hidden: 'boolean', // (UNION) boolean
    id: 'string', // string
    lang: 'string', // string
    placeholder: 'string', // string
    slot: 'string', // string
    spellCheck: 'string', // (UNION) Booleanish
    style: 'string', // React.CSSProperties
    tabIndex: 'string', // number
    title: 'string', // string
    translate: {
      "type": "choice",
      "options": [
        "yes",
        "no"
      ]
    }, // (UNION) "yes" | "no"
    radioGroup: 'string', // string
    role: 'string', // (UNION) React.AriaRole
    about: 'string', // string
    datatype: 'string', // string
    inlist: 'string', // any
    prefix: 'string', // string
    property: 'string', // string
    resource: 'string', // string
    typeof: 'string', // string
    vocab: 'string', // string
    autoCapitalize: 'string', // string
    autoCorrect: 'string', // string
    autoSave: 'string', // string
    color: 'string', // string
    itemProp: 'string', // string
    itemScope: 'boolean', // (UNION) boolean
    itemType: 'string', // string
    itemID: 'string', // string
    itemRef: 'string', // string
    results: 'string', // number
    security: 'string', // string
    unselectable: {
      "type": "choice",
      "options": [
        "on",
        "off"
      ]
    }, // (UNION) "on" | "off"
    inputMode: {
      "type": "choice",
      "options": [
        "none",
        "search",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal"
      ]
    }, // (UNION) "none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"
    is: 'string', // string
    dangerouslySetInnerHTML: 'string', // { __html: string; }
    onCopy: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCopyCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCut: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCutCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPaste: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPasteCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCompositionEnd: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionEndCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStart: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStartCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdate: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdateCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onFocus: 'string', // React.FocusEventHandler<HTMLDivElement>
    onFocusCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlur: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlurCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onChange: 'string', // React.FormEventHandler<HTMLDivElement>
    onChangeCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onReset: 'string', // React.FormEventHandler<HTMLDivElement>
    onResetCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmit: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmitCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalid: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalidCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onLoad: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onError: 'string', // React.ReactEventHandler<HTMLDivElement>
    onErrorCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onKeyDown: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyDownCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPress: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPressCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUp: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUpCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onAbort: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAbortCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThrough: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThroughCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptied: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptiedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncrypted: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncryptedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEnded: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEndedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedData: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedDataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadata: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStart: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStartCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPause: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPauseCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlaying: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgress: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgressCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeked: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeking: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalled: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalledCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspend: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspendCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdate: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdateCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaiting: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaitingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAuxClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onAuxClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenu: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenuCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDrag: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnd: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEndCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnter: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnterCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExit: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExitCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeave: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeaveCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOver: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOverCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStart: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStartCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDrop: 'string', // React.DragEventHandler<HTMLDivElement>
    onDropCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onMouseDown: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseDownCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseEnter: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseLeave: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMove: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMoveCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOut: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOutCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOver: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOverCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUp: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUpCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onSelect: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSelectCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTouchCancel: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchCancelCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEnd: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEndCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMove: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMoveCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStart: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStartCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onPointerDown: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerDownCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMove: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMoveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUp: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUpCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancel: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancelCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnter: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnterCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeave: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeaveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOver: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOverCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOut: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOutCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onScroll: 'string', // React.UIEventHandler<HTMLDivElement>
    onScrollCapture: 'string', // React.UIEventHandler<HTMLDivElement>
    onWheel: 'string', // React.WheelEventHandler<HTMLDivElement>
    onWheelCapture: 'string', // React.WheelEventHandler<HTMLDivElement>
    onAnimationStart: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationStartCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEnd: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEndCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIteration: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIterationCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onTransitionEnd: 'string', // React.TransitionEventHandler<HTMLDivElement>
    onTransitionEndCapture: 'string', // React.TransitionEventHandler<HTMLDivElement>
  }
}
);


PLASMIC.registerComponent(CardTitle, {
  name: "CardTitle",
  props: {
    className: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
    defaultChecked: 'boolean', // (UNION) boolean
    defaultValue: 'string', // (UNION) string | number | ReadonlyArray<string>
    suppressContentEditableWarning: 'boolean', // (UNION) boolean
    suppressHydrationWarning: 'boolean', // (UNION) boolean
    accessKey: 'string', // string
    contentEditable: 'string', // (UNION) Booleanish | "inherit"
    contextMenu: 'string', // string
    dir: 'string', // string
    draggable: 'string', // (UNION) Booleanish
    hidden: 'boolean', // (UNION) boolean
    id: 'string', // string
    lang: 'string', // string
    placeholder: 'string', // string
    slot: 'string', // string
    spellCheck: 'string', // (UNION) Booleanish
    style: 'string', // React.CSSProperties
    tabIndex: 'string', // number
    title: 'string', // string
    translate: {
      "type": "choice",
      "options": [
        "yes",
        "no"
      ]
    }, // (UNION) "yes" | "no"
    radioGroup: 'string', // string
    role: 'string', // (UNION) React.AriaRole
    about: 'string', // string
    datatype: 'string', // string
    inlist: 'string', // any
    prefix: 'string', // string
    property: 'string', // string
    resource: 'string', // string
    typeof: 'string', // string
    vocab: 'string', // string
    autoCapitalize: 'string', // string
    autoCorrect: 'string', // string
    autoSave: 'string', // string
    color: 'string', // string
    itemProp: 'string', // string
    itemScope: 'boolean', // (UNION) boolean
    itemType: 'string', // string
    itemID: 'string', // string
    itemRef: 'string', // string
    results: 'string', // number
    security: 'string', // string
    unselectable: {
      "type": "choice",
      "options": [
        "on",
        "off"
      ]
    }, // (UNION) "on" | "off"
    inputMode: {
      "type": "choice",
      "options": [
        "none",
        "search",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal"
      ]
    }, // (UNION) "none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"
    is: 'string', // string
    dangerouslySetInnerHTML: 'string', // { __html: string; }
    onCopy: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCopyCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCut: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCutCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPaste: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPasteCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCompositionEnd: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionEndCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStart: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStartCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdate: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdateCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onFocus: 'string', // React.FocusEventHandler<HTMLDivElement>
    onFocusCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlur: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlurCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onChange: 'string', // React.FormEventHandler<HTMLDivElement>
    onChangeCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onReset: 'string', // React.FormEventHandler<HTMLDivElement>
    onResetCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmit: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmitCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalid: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalidCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onLoad: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onError: 'string', // React.ReactEventHandler<HTMLDivElement>
    onErrorCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onKeyDown: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyDownCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPress: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPressCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUp: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUpCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onAbort: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAbortCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThrough: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThroughCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptied: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptiedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncrypted: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncryptedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEnded: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEndedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedData: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedDataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadata: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStart: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStartCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPause: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPauseCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlaying: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgress: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgressCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeked: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeking: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalled: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalledCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspend: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspendCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdate: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdateCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaiting: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaitingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAuxClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onAuxClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenu: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenuCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDrag: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnd: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEndCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnter: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnterCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExit: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExitCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeave: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeaveCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOver: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOverCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStart: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStartCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDrop: 'string', // React.DragEventHandler<HTMLDivElement>
    onDropCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onMouseDown: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseDownCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseEnter: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseLeave: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMove: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMoveCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOut: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOutCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOver: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOverCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUp: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUpCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onSelect: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSelectCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTouchCancel: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchCancelCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEnd: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEndCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMove: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMoveCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStart: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStartCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onPointerDown: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerDownCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMove: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMoveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUp: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUpCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancel: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancelCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnter: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnterCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeave: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeaveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOver: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOverCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOut: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOutCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onScroll: 'string', // React.UIEventHandler<HTMLDivElement>
    onScrollCapture: 'string', // React.UIEventHandler<HTMLDivElement>
    onWheel: 'string', // React.WheelEventHandler<HTMLDivElement>
    onWheelCapture: 'string', // React.WheelEventHandler<HTMLDivElement>
    onAnimationStart: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationStartCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEnd: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEndCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIteration: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIterationCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onTransitionEnd: 'string', // React.TransitionEventHandler<HTMLDivElement>
    onTransitionEndCapture: 'string', // React.TransitionEventHandler<HTMLDivElement>
  }
}
);


PLASMIC.registerComponent(CardText, {
  name: "CardText",
  props: {
    className: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
    defaultChecked: 'boolean', // (UNION) boolean
    defaultValue: 'string', // (UNION) string | number | ReadonlyArray<string>
    suppressContentEditableWarning: 'boolean', // (UNION) boolean
    suppressHydrationWarning: 'boolean', // (UNION) boolean
    accessKey: 'string', // string
    contentEditable: 'string', // (UNION) Booleanish | "inherit"
    contextMenu: 'string', // string
    dir: 'string', // string
    draggable: 'string', // (UNION) Booleanish
    hidden: 'boolean', // (UNION) boolean
    id: 'string', // string
    lang: 'string', // string
    placeholder: 'string', // string
    slot: 'string', // string
    spellCheck: 'string', // (UNION) Booleanish
    style: 'string', // React.CSSProperties
    tabIndex: 'string', // number
    title: 'string', // string
    translate: {
      "type": "choice",
      "options": [
        "yes",
        "no"
      ]
    }, // (UNION) "yes" | "no"
    radioGroup: 'string', // string
    role: 'string', // (UNION) React.AriaRole
    about: 'string', // string
    datatype: 'string', // string
    inlist: 'string', // any
    prefix: 'string', // string
    property: 'string', // string
    resource: 'string', // string
    typeof: 'string', // string
    vocab: 'string', // string
    autoCapitalize: 'string', // string
    autoCorrect: 'string', // string
    autoSave: 'string', // string
    color: 'string', // string
    itemProp: 'string', // string
    itemScope: 'boolean', // (UNION) boolean
    itemType: 'string', // string
    itemID: 'string', // string
    itemRef: 'string', // string
    results: 'string', // number
    security: 'string', // string
    unselectable: {
      "type": "choice",
      "options": [
        "on",
        "off"
      ]
    }, // (UNION) "on" | "off"
    inputMode: {
      "type": "choice",
      "options": [
        "none",
        "search",
        "text",
        "tel",
        "url",
        "email",
        "numeric",
        "decimal"
      ]
    }, // (UNION) "none" | "search" | "text" | "tel" | "url" | "email" | "numeric" | "decimal"
    is: 'string', // string
    dangerouslySetInnerHTML: 'string', // { __html: string; }
    onCopy: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCopyCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCut: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCutCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPaste: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onPasteCapture: 'string', // React.ClipboardEventHandler<HTMLDivElement>
    onCompositionEnd: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionEndCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStart: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionStartCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdate: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onCompositionUpdateCapture: 'string', // React.CompositionEventHandler<HTMLDivElement>
    onFocus: 'string', // React.FocusEventHandler<HTMLDivElement>
    onFocusCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlur: 'string', // React.FocusEventHandler<HTMLDivElement>
    onBlurCapture: 'string', // React.FocusEventHandler<HTMLDivElement>
    onChange: 'string', // React.FormEventHandler<HTMLDivElement>
    onChangeCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onBeforeInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInput: 'string', // React.FormEventHandler<HTMLDivElement>
    onInputCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onReset: 'string', // React.FormEventHandler<HTMLDivElement>
    onResetCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmit: 'string', // React.FormEventHandler<HTMLDivElement>
    onSubmitCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalid: 'string', // React.FormEventHandler<HTMLDivElement>
    onInvalidCapture: 'string', // React.FormEventHandler<HTMLDivElement>
    onLoad: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onError: 'string', // React.ReactEventHandler<HTMLDivElement>
    onErrorCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onKeyDown: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyDownCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPress: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyPressCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUp: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onKeyUpCapture: 'string', // React.KeyboardEventHandler<HTMLDivElement>
    onAbort: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAbortCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThrough: 'string', // React.ReactEventHandler<HTMLDivElement>
    onCanPlayThroughCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onDurationChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptied: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEmptiedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncrypted: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEncryptedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEnded: 'string', // React.ReactEventHandler<HTMLDivElement>
    onEndedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedData: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedDataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadata: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadedMetadataCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStart: 'string', // React.ReactEventHandler<HTMLDivElement>
    onLoadStartCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPause: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPauseCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlay: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlaying: 'string', // React.ReactEventHandler<HTMLDivElement>
    onPlayingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgress: 'string', // React.ReactEventHandler<HTMLDivElement>
    onProgressCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onRateChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeked: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekedCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeeking: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSeekingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalled: 'string', // React.ReactEventHandler<HTMLDivElement>
    onStalledCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspend: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSuspendCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdate: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTimeUpdateCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChange: 'string', // React.ReactEventHandler<HTMLDivElement>
    onVolumeChangeCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaiting: 'string', // React.ReactEventHandler<HTMLDivElement>
    onWaitingCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onAuxClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onAuxClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenu: 'string', // React.MouseEventHandler<HTMLDivElement>
    onContextMenuCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClick: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDoubleClickCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onDrag: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnd: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEndCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnter: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragEnterCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExit: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragExitCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeave: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragLeaveCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOver: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragOverCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStart: 'string', // React.DragEventHandler<HTMLDivElement>
    onDragStartCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onDrop: 'string', // React.DragEventHandler<HTMLDivElement>
    onDropCapture: 'string', // React.DragEventHandler<HTMLDivElement>
    onMouseDown: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseDownCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseEnter: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseLeave: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMove: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseMoveCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOut: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOutCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOver: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseOverCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUp: 'string', // React.MouseEventHandler<HTMLDivElement>
    onMouseUpCapture: 'string', // React.MouseEventHandler<HTMLDivElement>
    onSelect: 'string', // React.ReactEventHandler<HTMLDivElement>
    onSelectCapture: 'string', // React.ReactEventHandler<HTMLDivElement>
    onTouchCancel: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchCancelCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEnd: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchEndCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMove: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchMoveCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStart: 'string', // React.TouchEventHandler<HTMLDivElement>
    onTouchStartCapture: 'string', // React.TouchEventHandler<HTMLDivElement>
    onPointerDown: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerDownCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMove: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerMoveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUp: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerUpCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancel: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerCancelCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnter: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerEnterCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeave: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerLeaveCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOver: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOverCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOut: 'string', // React.PointerEventHandler<HTMLDivElement>
    onPointerOutCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onGotPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onLostPointerCaptureCapture: 'string', // React.PointerEventHandler<HTMLDivElement>
    onScroll: 'string', // React.UIEventHandler<HTMLDivElement>
    onScrollCapture: 'string', // React.UIEventHandler<HTMLDivElement>
    onWheel: 'string', // React.WheelEventHandler<HTMLDivElement>
    onWheelCapture: 'string', // React.WheelEventHandler<HTMLDivElement>
    onAnimationStart: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationStartCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEnd: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationEndCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIteration: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onAnimationIterationCapture: 'string', // React.AnimationEventHandler<HTMLDivElement>
    onTransitionEnd: 'string', // React.TransitionEventHandler<HTMLDivElement>
    onTransitionEndCapture: 'string', // React.TransitionEventHandler<HTMLDivElement>
  }
}
);


PLASMIC.registerComponent(Code, {
  name: "Code",
  props: {
    variant: {
      "type": "choice",
      "options": [
        "indigo",
        "black",
        "default",
        "blue-outline"
      ]
    }, // (UNION) "indigo" | "black" | "default" | "blue-outline"
    children: 'string', // string
    acceptCopy: 'boolean', // (UNION) boolean
  }
}
);


PLASMIC.registerComponent(Menu, {
  name: "Menu",
  props: {
    open: 'boolean', // (UNION) boolean
    transition: {
      "type": "choice",
      "options": [
        "left",
        "top"
      ]
    }, // (UNION) "left" | "top"
    children: 'slot', // (UNION) React.ReactNode
  }
}
);


PLASMIC.registerComponent(MenuContainer, {
  name: "MenuContainer",
  props: {
    children: 'slot', // (UNION) React.ReactNode
  }
}
);


PLASMIC.registerComponent(MenuItem, {
  name: "MenuItem",
  props: {
    href: 'string', // string
    children: 'slot', // (UNION) React.ReactNode
  }
}
);


PLASMIC.registerComponent(Drawer, {
  name: "Drawer",
  props: {
    isOpen: 'boolean', // (UNION) boolean
    position: {
      "type": "choice",
      "options": [
        "left",
        "top",
        "right",
        "bottom"
      ]
    }, // (UNION) "left" | "top" | "right" | "bottom"
    toggle: 'string', // (isOpen?: boolean) => <<unresolved>> is any
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DrawerHeader, {
  name: "DrawerHeader",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DrawerBody, {
  name: "DrawerBody",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DrawerFooter, {
  name: "DrawerFooter",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(Dropdown, {
  name: "Dropdown",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DropdownToggle, {
  name: "DropdownToggle",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DropdownMenu, {
  name: "DropdownMenu",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DropdownItem, {
  name: "DropdownItem",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(DropdownDivider, {
  name: "DropdownDivider",
  props: {
  }
}
);


PLASMIC.registerComponent(HamburgerMenu, {
  name: "HamburgerMenu",
  props: {
    textColor: 'string', // string
    bgColor: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuBrand, {
  name: "HamburgerMenuBrand",
  props: {
    href: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuToggler, {
  name: "HamburgerMenuToggler",
  props: {
    toggle: 'string', // () => <<unresolved>> is any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuCollapse, {
  name: "HamburgerMenuCollapse",
  props: {
    open: 'boolean', // (UNION) boolean
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuNav, {
  name: "HamburgerMenuNav",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuItem, {
  name: "HamburgerMenuItem",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(HamburgerMenuLink, {
  name: "HamburgerMenuLink",
  props: {
    href: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(ListGroup, {
  name: "ListGroup",
  props: {
    children: 'slot', // (UNION) React.ReactNode
    className: 'string', // string
    href: 'string', // string
  }
}
);


PLASMIC.registerComponent(ListGroupItem, {
  name: "ListGroupItem",
  props: {
    children: 'slot', // (UNION) React.ReactNode
    className: 'string', // string
    href: 'string', // string
  }
}
);


PLASMIC.registerComponent(Modal, {
  name: "Modal",
  props: {
    isOpen: 'boolean', // (UNION) boolean
    position: {
      "type": "choice",
      "options": [
        "default",
        "large",
        "extraLarge"
      ]
    }, // (UNION) "default" | "large" | "extraLarge"
    toggle: 'string', // (isOpen?: boolean) => <<unresolved>> is any
    closeOnClickOutside: 'boolean', // (UNION) boolean
    animate: 'boolean', // (UNION) boolean
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(ModalHeader, {
  name: "ModalHeader",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(ModalBody, {
  name: "ModalBody",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(ModalFooter, {
  name: "ModalFooter",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(Navbar, {
  name: "Navbar",
  props: {
    className: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(NavbarBrand, {
  name: "NavbarBrand",
  props: {
    href: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(NavbarToggler, {
  name: "NavbarToggler",
  props: {
  }
}
);


PLASMIC.registerComponent(NavbarCollapse, {
  name: "NavbarCollapse",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(NavbarNav, {
  name: "NavbarNav",
  props: {
    orientation: {
      "type": "choice",
      "options": [
        "start",
        "middle",
        "end"
      ]
    }, // (UNION) "start" | "middle" | "end"
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(NavbarItem, {
  name: "NavbarItem",
  props: {
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(NavbarLink, {
  name: "NavbarLink",
  props: {
    active: 'boolean', // (UNION) boolean
    activeClass: 'string', // string
    href: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(Sidenav, {
  name: "Sidenav",
  props: {
    open: 'boolean', // (UNION) boolean
    position: {
      "type": "choice",
      "options": [
        "left",
        "right"
      ]
    }, // (UNION) "left" | "right"
    toggle: 'string', // (value?: unknown) => <<unresolved>> is any
    closeOnClickOutside: 'boolean', // (UNION) boolean
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(SidenavItem, {
  name: "SidenavItem",
  props: {
    href: 'string', // string
    children: 'string', // any
  }
}
);


PLASMIC.registerComponent(Tab, {
  name: "Tab",
  props: {
    selected: 'boolean', // (UNION) boolean
    title: 'string', // string
    children: 'string', // any
  }
}
);
