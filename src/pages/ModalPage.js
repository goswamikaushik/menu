import React, { useState } from "react";
import Modal from "../components/Modal";
import Button from "../components/Button";

const ModalPage = () => {
  const [showModal, setShowModal] = useState(false);

  const handleClick = () => {
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
  };

  const actionBar = (
    <div>
      <Button onClick={handleClose} primary>
        I Accept
      </Button>
    </div>
  );
  const modal = (
    <Modal onClose={handleClose} actionBar={actionBar}>
      <p>Here is an important agreement for you to accept </p>
    </Modal>
  );

  return (
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum et
        porttitor urna, sit amet pellentesque quam. Maecenas posuere elementum
        libero, laoreet feugiat lectus volutpat in. Suspendisse eget turpis nec
        odio hendrerit posuere. Praesent in justo ligula. Praesent et semper
        sapien, ac accumsan elit. Vivamus blandit non leo sit amet rhoncus.
        Mauris malesuada, purus sed semper egestas, nibh dui vulputate nisi,
        semper pharetra dui dui eget mauris. Nunc auctor molestie fringilla.
        Donec accumsan, leo sed lacinia condimentum, diam magna vulputate massa,
        ac hendrerit arcu orci id dui. Nulla massa libero, faucibus nec sapien
        et, auctor laoreet nulla. Maecenas ut enim ac mi sollicitudin auctor.
      </p>

      <Button onClick={handleClick} primary>
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
};

export default ModalPage;
