'use client';

import { useState } from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { Bold, Italic, List, ListOrdered, Heading2, Undo, Redo } from 'lucide-react';

export default function RichTextEditor({
  name,
  defaultValue = '',
}: {
  name: string;
  defaultValue?: string;
}) {
  const [html, setHtml] = useState(defaultValue);

  const editor = useEditor({
    extensions: [StarterKit],
    content: defaultValue,
    immediatelyRender: false, // required for Next.js App Router (SSR)
    editorProps: {
      attributes: { class: 'rte-content' },
    },
    onUpdate: ({ editor }) => setHtml(editor.getHTML()),
  });

  if (!editor) {
    return <div className="rte"><div className="rte-content" /></div>;
  }

  const btn = (active: boolean) => `rte-btn${active ? ' active' : ''}`;

  return (
    <div className="rte">
      <div className="rte-toolbar">
        <button type="button" className={btn(editor.isActive('bold'))} onClick={() => editor.chain().focus().toggleBold().run()} title="Bold"><Bold size={15} /></button>
        <button type="button" className={btn(editor.isActive('italic'))} onClick={() => editor.chain().focus().toggleItalic().run()} title="Italic"><Italic size={15} /></button>
        <button type="button" className={btn(editor.isActive('heading', { level: 2 }))} onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()} title="Heading"><Heading2 size={15} /></button>
        <span className="rte-sep" />
        <button type="button" className={btn(editor.isActive('bulletList'))} onClick={() => editor.chain().focus().toggleBulletList().run()} title="Bullet list"><List size={15} /></button>
        <button type="button" className={btn(editor.isActive('orderedList'))} onClick={() => editor.chain().focus().toggleOrderedList().run()} title="Numbered list"><ListOrdered size={15} /></button>
        <span className="rte-sep" />
        <button type="button" className="rte-btn" onClick={() => editor.chain().focus().undo().run()} title="Undo"><Undo size={15} /></button>
        <button type="button" className="rte-btn" onClick={() => editor.chain().focus().redo().run()} title="Redo"><Redo size={15} /></button>
      </div>
      <EditorContent editor={editor} />
      <input type="hidden" name={name} value={html} />
    </div>
  );
}
