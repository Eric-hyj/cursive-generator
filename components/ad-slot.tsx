export function AdSlot({ note }: { note: string }) {
  return (
    <div className="ad-slot" aria-label="Advertisement">
      <span>Ad · {note}</span>
    </div>
  );
}
