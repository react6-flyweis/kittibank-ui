import { type ReactNode, useState } from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '../components/ui/alert-dialog';

interface ConfirmDialogProps {
  /**
   * The element that triggers the dialog (e.g., a button).
   */
  children: ReactNode;
  /**
   * Dialog title (required, visible to screen readers).
   */
  title: string;
  /**
   * Dialog description (optional, visible to screen readers).
   */
  description?: string;
  /**
   * Confirm button label (defaults to "Confirm").
   */
  confirmLabel?: string;
  /**
   * Cancel button label (defaults to "Cancel").
   */
  cancelLabel?: string;
  /**
   * Called when the user confirms.
   */
  onConfirm: () => void;
  /**
   * Whether the confirm button is loading/disabled.
   */
  loading?: boolean;
}

export function ConfirmDialog({
  children,
  title,
  description,
  confirmLabel = 'Confirm',
  cancelLabel = 'Cancel',
  onConfirm,
  loading = false,
}: ConfirmDialogProps) {
  const [open, setOpen] = useState(false);
  return (
    <AlertDialog onOpenChange={setOpen} open={open}>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>{title}</AlertDialogTitle>
          {description ? (
            <AlertDialogDescription>{description}</AlertDialogDescription>
          ) : null}
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={() => setOpen(false)}>
            {cancelLabel}
          </AlertDialogCancel>
          <AlertDialogAction
            disabled={loading}
            onClick={onConfirm}
            type="button"
          >
            {loading ? 'Processing...' : confirmLabel}
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
